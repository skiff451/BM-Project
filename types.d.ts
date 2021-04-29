interface IProduct {
  id: number;
  name: string;
  img: string;
  altText: string;
  link: string;
}

interface ISubCategory {
  id: number;
  name: string;
  enable: boolean;
  products: IProduct[];
}

interface ICategory {
  id: number;
  name: string;
  enable: boolean;
  description: string;
  subCategory: ISubCategory[];
}

interface IDataFetched {
  name: string;
  category: ICategory[];
}
