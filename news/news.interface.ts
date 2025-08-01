export interface INews {
  id: string;
  title: string;
  main_img: string;
  date: string;
}

export interface INewsDetail {
  id: string;
  title: string;
  main_img: string;
  sub_img: string[];
  date: string;
  desc: string;
}

export interface INewsPage {
  projects: INews[];
}
