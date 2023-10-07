import ContentCardProduct from "@/components/ContentCardProduct";
import { render, screen } from "@testing-library/react";

const props = {
  price: 50,
  discountPercentage: 20,
  rating: 4.5,
  changeSize: false,
};

describe("<ContentCardProduct />", () => {
  test("Should show the price, discountPercentage end rating in the component", () => {
    render(
      <ContentCardProduct
        price={props.price}
        discountPercentage={props.discountPercentage}
        rating={props.rating}
      />
    );

    const priceElement = screen.getByText(`$${props.price}`);
    expect(priceElement).toBeInTheDocument();

    const discountElement = screen.getByText(
      `${props.discountPercentage}% OFF`
    );
    expect(discountElement).toBeInTheDocument();

    const ratingElement = screen.getByText(`${props.rating}`);
    expect(ratingElement).toBeInTheDocument();
  });
});
