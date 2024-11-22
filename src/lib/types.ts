export interface Experience {
  title: string;
  company: string;
  url?: string;
  location: string;
  date: string;
  type: string;
  details?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: {
    summary: string;
    points: string[];
  };
  techStacks: string[];
  github?: string;
  website?: string;
}
