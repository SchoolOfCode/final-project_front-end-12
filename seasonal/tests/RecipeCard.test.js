import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//Import router to bypass useEffect
import * as nextRouter from "next/router";
import RecipeCard from "../components/RecipeCard.js";

describe("RecipeCard unit tests", () => {
  test("When rendered and receives no results from API, should show a loading message", () => {
    //Mock up router to avoid useEffect error on render
    //Setting isReady to false so the useEffect stops (line 74 in component)
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ isReady: false }));
    render(<RecipeCard />);
    const noResultText = screen.getByText(/loading/i);
    expect(noResultText).toBeVisible();
  });
});
