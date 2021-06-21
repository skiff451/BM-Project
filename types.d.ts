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

interface IDesignFeature {
  id: string;
  featureName: string;
  featureDescription: string;
}

interface IMachineSpecification {
  id: string;
  name: string;
  description: string;
  specifications: string[][];
}

interface IFullProductData {
  id: string;
  name: string;
  imgsSrcArr: string[];
  altText: string;
  fullProductData: {
    fullName: string;
    productDescription: string;
    designFeatures: IDesignFeature[];
    qualities: string[];
    MachineSpecifications: IMachineSpecification[];
  };
}
