import fs from "fs/promises"

export async function loadSites() {

  const config = await fs.readFile(
    "sites.config.json",
    "utf-8"
  )

  return JSON.parse(config)
}