export interface WorkProps {
  id: number;
  name: string;
  description: string;
  imgURL: string;
  technologyUsed: string[];
  redirectURL: string;
}

export interface WorkItemsProps {
  workItems: WorkProps[];
};