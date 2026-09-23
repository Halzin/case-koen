import { spawnSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readExecutionProfile } from "./execution-profile.mjs";

async function writeRoutesManifest() {
  const manifest = {
    version: 3,
    pages404: true,
    caseSensitive: false,
    redirects: [],
    headers: [],
    rewrites: [],
    dynamicRoutes: [],
    staticRoutes: [
      { page: "/", regex: "^\\/$", routeKeys: {} },
      { page: "/menu", regex: "^\\/menu$", routeKeys: {} },
    ],
    dataRoutes: [],
    i18n: undefined,
  };
  const outputPath = resolve(process.cwd(), ".next/routes-manifest.json");
  await mkdir(resolve(process.cwd(), ".next"), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

const [command, ...args] = process.argv.slice(2);
if (!["dev", "build"].includes(command)) throw new Error("Expected dev or build.");
const managedLinux = readExecutionProfile() === "managed-linux";

if (managedLinux && command === "build") {
  const result = spawnSync("bash", [
    fileURLToPath(new URL("./build-verified.sh", import.meta.url)), ...args,
  ], { stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status === 0) await writeRoutesManifest();
  process.exit(result.status ?? 1);
}

// Import in this process so the preview owner retains its PID and signals.
const cli = new URL(managedLinux
  ? "../node_modules/vite/bin/vite.js"
  : "../node_modules/vinext/dist/cli.js", import.meta.url);
process.argv = [process.execPath, fileURLToPath(cli), command,
  ...(!managedLinux && command === "dev" ? ["--port", "5173"] : []), ...args];
await import(cli.href);
if (command === "build") await writeRoutesManifest();
