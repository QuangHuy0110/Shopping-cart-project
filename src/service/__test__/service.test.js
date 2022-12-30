import { countTotalPrice, getDataFromApi, createShortcut } from "../index";
import "@testing-library/jest-dom";
import AxiosMock from "axios";

const mockData = [
  {
    id: 1,
    title: "iPhone 9",
    quantity: 1,
    price: 500,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    quantity: 1,
    price: 600,
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "iPhone 11",
    quantity: 1,
    price: 700,
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  },
];
const emtyCartList = [];
const mockApi = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
  ],
  total: 100,
  skip: 0,
  limit: 30,
};
describe("test service", () => {
  it("test price countTotalPrice", () => {
    expect(countTotalPrice(mockData)).toEqual(1800);
  });
  it("test return 0 when cart list is empty", () => {
    expect(countTotalPrice(emtyCartList)).toEqual(0);
  });
  it("test getDataFromApi", async () => {
    await AxiosMock.get.mockResolvedValue({ data: mockApi });
    const result = await getDataFromApi();
    expect(result).toEqual(mockApi);
  });
  it("test text content is longer than criteria", async () => {
    expect(createShortcut("Microsoft Surface Laptop 4", 25)).toEqual(
      "Microsoft Surface Lapt..."
    );
  });
  it("test text content is less than criteria", async () => {
    expect(createShortcut("iPhone 9", 25)).toEqual("iPhone 9");
  });
});
