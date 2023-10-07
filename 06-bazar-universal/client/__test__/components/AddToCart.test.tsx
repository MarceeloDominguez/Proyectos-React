import { fireEvent, render, screen } from "@testing-library/react";
import AddToCart from "@/components/AddToCart";

const props = {
  stock: 10,
  id: 1,
  quantity: 5,
};

const mockAddProductsToCart = jest.fn();
const mockRemoveProduct = jest.fn();

jest.mock("../../src/store/cartStore", () => ({
  useCartStore: () => ({
    addProductsToCart: mockAddProductsToCart,
    removeProduct: mockRemoveProduct,
  }),
}));

describe("<AddToCart />", () => {
  test("Should add and remove from cart", () => {
    render(<AddToCart {...props} />);

    const addButton = screen.getByText("+");
    const removeButton = screen.getByText("-");

    fireEvent.click(addButton);
    expect(mockAddProductsToCart).toHaveBeenCalledWith(props.id);

    fireEvent.click(removeButton);
    expect(mockRemoveProduct).toHaveBeenCalledWith(props.id);
  });
});
