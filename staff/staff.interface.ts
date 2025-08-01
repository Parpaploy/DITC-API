export interface IStaffCategory {
  category: string;
}

export interface IStaff {
  id: string;
  firstname: string;
  lastname: string;
  img: string;
  category: string; // relate with staff_category
  position: string;
}

export interface IStaffPage {
  projects: IStaff[];
}
