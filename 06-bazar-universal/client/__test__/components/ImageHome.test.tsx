import "@testing-library/jest-dom";
import ImageHome from "@/components/ImageHome";
import { render, screen } from "@testing-library/react";

describe("<ImageHome />", () => {
  test("Should render the component ImageHome", () => {
    render(<ImageHome />);

    const imageElement = screen.getByAltText("logo tienda online");

    expect(imageElement).toBeInTheDocument();

    expect(imageElement).toHaveAttribute("src", "/inicio.png");
  });
});
