export interface IItemDistanation {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface IItemCrew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface IItemTechnology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
