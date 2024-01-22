import fs from "fs";
import path from "path";
import matter from "gray-matter";
/** Interfaces */
import { MetadataProps } from "@/libs/interfaces";

const readAndParseFile = (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return matter(fileContents);
};

export const getPostMetadata = (folder: string): MetadataProps[] => {
  const absolutePath = path.resolve(process.cwd(), folder);
  const files = fs.readdirSync(absolutePath);
  
  return files.map((fn) => {
    const filePath = path.join(absolutePath, fn);
    const { data: { name, description, is_active, thumbnail_URL, dev_date, content } } = readAndParseFile(filePath);

    return {
      slug: fn.replace(".md", ""),
      name,
      description,
      is_active,
      thumbnail_URL,
      dev_date,
      content
    };
  });
};

export const readMetadataFromMdFile = (filePath: string): MetadataProps => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const { data: { name, description, is_active, thumbnail_URL, dev_date }, content } = readAndParseFile(absolutePath);

  return {
    slug: path.basename(filePath, '.md'),
    name,
    description,
    is_active,
    thumbnail_URL,
    dev_date,
    content
  };
};