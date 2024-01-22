import fs from "fs";
import path from "path";
import matter from "gray-matter";
/** Interfaces */
import { MetadataProps } from "@/libs/interfaces";

export const getPostMetadata = (folder: string): MetadataProps[] => {
  const files = fs.readdirSync(folder);
  
  const posts = files.map((fn) => {
    const filePath = path.join(folder, fn);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    const { name, description, is_active, thumbnail_URL, dev_date, content } = matterResult.data;

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

  return posts;
};

export const readMetadataFromMdFile = (filePath: string): MetadataProps => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);

  const { name, description, is_active, thumbnail_URL, dev_date } = matterResult.data;
  const content = matterResult.content;

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
