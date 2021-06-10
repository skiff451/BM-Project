interface IProduct {
  id: number;
  name: string;
  imgsSrcArr: string[];
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
  categoryName: string;
  name: string;
  enable: boolean;
  description: string;
  imgSrc: string;
  path: string;
  products: IProducts[];
}

interface IDataFetched {
  name: string;
  category: ICategory[];
}

interface IProducts {
  id: string;
  name: string;
  imgSrc: string[];
  altText: string;
  link: string;
}

interface IFullProductData {}
