import fs from "fs";
import path from "path";
import matter from "gray-matter";
/** Interfaces */
import { ProjectMetadataProps, CodingChallengeMetadataProps } from "@/libs/interfaces/metadata";

const readAndParseFile = (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return matter(fileContents);
};

export const getProjectMetadata = (folder: string): ProjectMetadataProps[] => {
  const absolutePath = path.resolve(process.cwd(), folder);
  const files = fs.readdirSync(absolutePath);
  
  return files.map((fn) => {
    const filePath = path.join(absolutePath, fn);
    const { data: { name, description, is_active, thumbnail_URL, is_repository_only, dev_date, content } } = readAndParseFile(filePath);

    return {
      slug: fn.replace(".md", ""),
      name,
      description,
      is_active,
      thumbnail_URL,
      is_repository_only,
      dev_date,
      content
    };
  });
};

export const getCodingChallengeMetadata = (folder: string): CodingChallengeMetadataProps[] => {
  const absolutePath = path.resolve(process.cwd(), folder);
  const files = fs.readdirSync(absolutePath);
  
  return files.map((fn) => {
    const filePath = path.join(absolutePath, fn);
    const { data: { name, platform, language, is_active, is_repository_only, dev_date, content } } = readAndParseFile(filePath);

    return {
      slug: fn.replace(".md", ""),
      name,
      platform,
      language,
      is_active,
      is_repository_only,
      dev_date,
      content
    };
  });
}

export const readProjectMetadataFromMdFile = (filePath: string): ProjectMetadataProps => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const { data: { name, description, is_active, thumbnail_URL, is_repository_only, dev_date }, content } = readAndParseFile(absolutePath);

  return {
    slug: path.basename(filePath, '.md'),
    name,
    description,
    is_active,
    thumbnail_URL,
    is_repository_only,
    dev_date,
    content
  };
};

export const readCodingChallengeMetadataFromMdFile = (filePath: string): CodingChallengeMetadataProps => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const { data: { name, platform, language, is_active, is_repository_only, dev_date }, content } = readAndParseFile(absolutePath);

  return {
    slug: path.basename(filePath, '.md'),
    name,
    is_active,
    platform,
    language,
    is_repository_only,
    dev_date,
    content
  };
};