import { render } from "@testing-library/react";
import Logo from "@/components/Logo";

describe("<Logo />", () => {
  it("Should render the logo", () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });
});
