import React from "react";
import { render, screen } from "@testing-library/react";
import Blog from "../Blog";
import "@testing-library/jest-dom";

const mockData = {
  title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis,numquam officiis aliquid ipsam fuga.",
  author: "John Doe",
  image: require("../../../assets/blog_1.jpg"),
};
test("BlogItem should be render", () => {
  render(<Blog content={mockData} />);
  const blogItem = screen.getByTestId("blog-item");
  expect(blogItem).toBeInTheDocument();
});
