export interface IProjectCategory {
  category: string;
}

export interface IProjectCourse {
  course: string;
}

export interface IProject {
  id: string;
  title: string;
  main_img: string;
  category: string; // relate with project_category
  course: string; // relate with project_course
}

export interface IProjectDetail {
  id: string;
  title: string;
  main_img: string;
  subImg: string[];
  category: string; // relate with project_category
  course: string; // relate with project_course
  description: string;
  link?: string[];
  date: string;
}
