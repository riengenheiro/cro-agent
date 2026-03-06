import fs from "fs/promises"

export async function loadProductBriefing(path) {
  const content = await fs.readFile(path, "utf-8")

  return {
    raw: content
  }
}