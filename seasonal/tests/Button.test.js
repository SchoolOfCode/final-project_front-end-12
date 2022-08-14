import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button.js";

describe("Button unit tests", () => {
  test("When rendered, should show appropriate text and image from props", () => {
    render(<Button text={"Testing"} image={"Test URL"} />);
    const buttonText = screen.getByText("Testing");
    const buttonImage = screen.getByRole("img", { name: /testing/i });
    expect(buttonText).toBeVisible();
    expect(buttonImage).toBeVisible();
  });
});
