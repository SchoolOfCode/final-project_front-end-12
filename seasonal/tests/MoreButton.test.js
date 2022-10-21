import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoreButton from "../components/MoreButton.js";

describe("MoreButton unit tests", () => {
  test("When rendered, should show a button with More in Season displayed", () => {
    render(<MoreButton text={"Testing"} />);
    const moreButtonText = screen.getByRole("button", {
      name: /more in season/i,
    });
    expect(moreButtonText).toBeVisible();
  });
});
