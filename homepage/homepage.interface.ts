import { IFacilities } from "../facilities/facilities.interface";
import { INews } from "../news/news.interface";
import { IProject } from "../projects/project.interface";

export interface IHomepage {
  projects: IProject[];
  facilities: IFacilities[];
  news: INews[];
}
