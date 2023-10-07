import { fireEvent, render, screen } from "@testing-library/react";
import SearchProducts from "@/components/SearchProducts";

describe("<SearchProduct />", () => {
  test("Should write to the input and navigate to a new route", () => {
    render(<SearchProducts />);

    const inputElement = screen.getByPlaceholderText(
      "Buscar... Ej: Laptop, iPhone, MacBook..."
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "laptop" } });
    expect(inputElement.value).toBe("laptop");

    const buttonElement = screen.getByText("Buscar");
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/items?search=laptop"
    );
  });
});
