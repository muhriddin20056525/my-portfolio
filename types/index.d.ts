export interface ISkills {
  id: number;
  title: string;
  icon: string;
}

export interface IProjects {
  id: number;
  title: string;
  description: string;
  github: string;
  google: string;
  youtube: string;
  skills: string[];
}

export interface IProjectCategories {
  id: number;
  title: string;
}
