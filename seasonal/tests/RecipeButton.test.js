import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RecipeButton from "../components/RecipeButton.js";

describe("RecipeButton unit tests", () => {
  test("When rendered, should show appropriate title and image from props", () => {
    render(
      <RecipeButton title={"Testing"} image={"Test URL"} id={"Test ID"} />
    );
    const buttonText = screen.getByRole("button", { name: /testing/i });
    const buttonImage = screen.getByRole("img", { name: /testing/i });
    expect(buttonText).toBeVisible();
    expect(buttonImage).toBeVisible();
  });
});
