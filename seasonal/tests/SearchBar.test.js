import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../components/SearchBar.js";

describe("SearchBar unit tests", () => {
  test("When rendered, should show the search form", () => {
    render(<SearchBar />);
    const searchInput = screen.getByRole("textbox", {
      name: /enter food item/i,
    });
    const searchDropdown = screen.getByRole("combobox", {
      name: /search dropdown/i,
    });
    const monthOption = screen.getByRole("option", {
      name: /month/i,
    });
    const itemOption = screen.getByRole("option", {
      name: /item/i,
    });
    const recipeOption = screen.getByRole("option", {
      name: /recipe/i,
    });
    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(searchInput).toBeVisible();
    expect(searchDropdown).toBeVisible();
    expect(monthOption).toBeVisible();
    expect(itemOption).toBeVisible();
    expect(recipeOption).toBeVisible();
    expect(submitButton).toBeVisible();
  });
  test("When rendered, user can type in to search input", async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const searchInput = screen.getByRole("textbox", {
      name: /enter food item/i,
    });
    await user.type(searchInput, "Testing");
    expect(searchInput).toHaveValue("Testing");
  });
});
