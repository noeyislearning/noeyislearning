export interface MetadataProps {
  slug: string;
  name: string;
  description: string;
  is_active: boolean;
  thumbnail_URL: string;
  dev_date: {
    start: string;
    end: string;
  };
  content: string;
  folder?: string;
}
