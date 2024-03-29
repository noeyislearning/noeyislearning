/**
 * General Metadata Inteface
 */
export interface ProjectMetadataProps {
  slug: string;
  name: string;
  description: string;
  is_active: boolean;
  thumbnail_URL: string;
  is_repository_only: boolean;
  dev_date: {
    start: string;
    end: string;
  };
  content: string;
  folder?: string;
}

/** 
 * Specific Metadata Interfaces
 * 1. Coding Challegnes 
 */
export interface CodingChallengeMetadataProps {
  slug: string;
  name: string;
  difficulty: string;
  is_active: boolean;
  platform: string;
  language: string;
  is_repository_only: boolean;
  dev_date: {
    start: string;
    end: string;
  };
  content: string;
  folder?: string;
}
