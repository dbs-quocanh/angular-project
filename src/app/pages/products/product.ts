export interface Product {
  id: number;
  name: string;
  detail: string;
  price: number;
  image: string;
  category: string;
}

export const categories = {
  phone: 'phone',
  laptop: 'laptop',
  clothes: 'clothes',
  reports: 'reports',
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Iphone 12',
    detail: 'Iphone 12 very beatiful',
    price: 200,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    category: 'phone',
  },
  {
    id: 2,
    name: 'Iphone 13',
    detail: 'Iphone 13 very beatiful',
    price: 300,
    image: 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg',
    category: 'phone',
  },
  {
    id: 3,
    name: 'Iphone 14',
    detail: 'Iphone 14 very beatiful',
    price: 400,
    image: 'https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-thumb-tim-1-600x600.jpg',
    category: 'phone',
  },
  {
    id: 4,
    name: 'Iphone 15',
    detail: 'Iphone 15 very beatiful',
    price: 500,
    image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
    category: 'phone',
  },
  {
    id: 5,
    name: 'iPhone 15 Plus',
    detail: 'iPhone 15 Plus very beatiful',
    price: 200,
    image: 'https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-xanh-thumb-600x600.jpg',
    category: 'phone',
  },
  {
    id: 6,
    name: 'iPhone 15',
    detail: 'iPhone 15 very beatiful',
    price: 300,
    image: 'https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-den-thumb-600x600.jpg',
    category: 'phone',
  },
  {
    id: 7,
    name: 'iPhone 14 Pro Max',
    detail: 'iPhone 14 Pro Max very beatiful',
    price: 200,
    image: 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg',
    category: 'phone',
  },
  {
    id: 8,
    name: 'iPhone 14 Pro',
    detail: 'Iphone 13 very beatiful',
    price: 300,
    image: 'https://cdn.tgdd.vn/Products/Images/42/245545/iPhone-14-plus-thumb-xanh-1-600x600.jpg',
    category: 'phone',
  },
  {
    id: 9,
    name: 'MacBook Air 13 inch M1 2020 7-core GPU',
    detail: 'Laptop 12 very beatiful',
    price: 200,
    image: 'https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gray-600x600.jpg',
    category: 'laptop',
  },
  {
    id: 10,
    name: 'MacBook Air 13 inch M2 2022 8-core GPU',
    detail: 'MacBook Air 13 inch M2 2022 8-core GPU very beatiful',
    price: 300,
    image: 'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-bac-600x600.jpg',
    category: 'laptop',
  },
  {
    id: 11,
    name: 'MacBook Pro 13 inch M2 2022 10-core GPU',
    detail: 'Laptop 14 very beatiful',
    price: 400,
    image: 'https://cdn.tgdd.vn/Products/Images/44/282828/apple-macbook-pro-13-inch-m2-2022-xam-600x600.jpg',
    category: 'laptop',
  },
  {
    id: 12,
    name: 'MacBook Air 15 inch M2 2023 10-core GPU',
    detail: 'MacBook Air 15 inch M2 2023 10-core GPU very beatiful',
    price: 500,
    image: 'https://cdn.tgdd.vn/Products/Images/44/309016/apple-macbook-air-15-inch-m2-2023-midnight-thumb-600x600.jpg',
    category: 'laptop',
  },
  {
    id: 13,
    name: 'MacBook Air 13 inch M2 2022 10-core GPU',
    detail: 'MacBook Air 13 inch M2 2022 10-core GPU very beatiful',
    price: 200,
    image: 'https://cdn.tgdd.vn/Products/Images/44/289441/apple-macbook-air-m2-2022-16gb-600x600.jpg',
    category: 'laptop',
  },
  {
    id: 14,
    name: 'MacBook Pro 13 inch M2 2022 10-core GPU',
    detail: 'MacBook Pro 13 inch M2 2022 10-core GPU very beatiful',
    price: 300,
    image: 'https://cdn.tgdd.vn/Products/Images/44/282885/apple-macbook-pro-m2-2022-xam-600x600.jpg',
    category: 'laptop',
  },
  {
    id: 15,
    name: 'MacBook Pro 16 inch M2 Pro 2023 19-core GPU',
    detail: 'MacBook Pro 16 inch M2 Pro 2023 19-core GPU very beatiful',
    price: 200,
    image: 'https://cdn.tgdd.vn/Products/Images/44/302149/macbook-pro-16-inch-m2-pro-gray-thumb-1-600x600.jpg',
    category: 'laptop',
  },
  {
    id: 16,
    name: 'MacBook Pro 13 inch M2 2022 10-core GPU',
    detail: 'MacBook Pro 13 inch M2 2022 10-core GPU very beatiful',
    price: 300,
    image: 'https://cdn.tgdd.vn/Products/Images/44/309018/apple-macbook-air-m2-2023-starlight-thumb-600x600.jpg',
    category: 'laptop',
  },
  {
    id: 17,
    name: 'Black',
    detail: 'Laptop 12 very beatiful',
    price: 200,
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    category: 'clothes',
  },
  {
    id: 18,
    name: 'Aspen White',
    detail: 'Laptop 13 very beatiful',
    price: 300,
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    category: 'clothes',
  },
  {
    id: 19,
    name: 'Charcoal',
    detail: 'Laptop 14 very beatiful',
    price: 400,
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    category: 'clothes',
  },
  {
    id: 20,
    name: 'Iso Dots',
    detail: 'Laptop 15 very beatiful',
    price: 500,
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    category: 'clothes',
  },
  {
    id: 21,
    name: 'Black',
    detail: 'Laptop 12 very beatiful',
    price: 200,
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    category: 'clothes',
  },
  {
    id: 22,
    name: 'Aspen White',
    detail: 'Laptop 13 very beatiful',
    price: 300,
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    category: 'clothes',
  },
  {
    id: 23,
    name: 'Charcoal',
    detail: 'Laptop 12 very beatiful',
    price: 200,
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    category: 'clothes',
  },
  {
    id: 24,
    name: 'Iso Dots',
    detail: 'Laptop 13 very beatiful',
    price: 300,
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    category: 'clothes',
  },
];
