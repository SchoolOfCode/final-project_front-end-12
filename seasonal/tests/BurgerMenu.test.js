import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BurgerMenu } from "../components/BurgerMenu";

const testFunction = jest.fn();

describe("BurgerMenu unit tests", () => {
  test("When rendered, should show an image", () => {
    render(<BurgerMenu handleLinkClick={testFunction} />);
    const burgerMenuImage = screen.getByRole("img", { name: /burger menu/i });
    expect(burgerMenuImage).toBeVisible();
  });
  test("When clicked, should show close button", async () => {
    const user = userEvent.setup();
    render(<BurgerMenu handleLinkClick={testFunction} />);
    const burgerMenuImage = screen.getByRole("img", { name: /burger menu/i });
    await user.click(burgerMenuImage);
    const closeImage = screen.getByRole("img", { name: /close menu/i });
    expect(closeImage).toBeInTheDocument();
  });
});
