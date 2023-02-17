import fs from "fs";
import path from "path";
export const SNIPPETS_PATH = path.join(process.cwd(), "snippets");

export const postFilePaths = fs
  .readdirSync(SNIPPETS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
