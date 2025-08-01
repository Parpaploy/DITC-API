export interface IFacilities {
  id: string;
  title: string;
  main_img: string;
  price: string;
  available: boolean;
  location: string;
}
export interface IFacilitiesDetail {
  id: string;
  title: string;
  main_img: string;
  sub_img: string[];
  vdo?: string[];
  price: string;
  available: boolean;
  desc: string;
  contact_link: string;
  location: string;
}

export interface IFacilitiesPage {
  projects: IFacilities[];
}
