import fs from "fs";
import path from "path";
export const CODE_PATH = path.join(process.cwd(), "content");

export const postFilePaths = fs
  .readdirSync(CODE_PATH)
  .filter((path) => /\.mdx?$/.test(path));
