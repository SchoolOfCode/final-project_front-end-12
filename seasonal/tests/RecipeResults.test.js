import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//Import router to bypass useEffect
import * as nextRouter from "next/router";
import RecipeResults from "../components/RecipeResults.js";

describe("RecipeResults unit tests", () => {
  test("When rendered and receives no results from API, should show a message confirming this", () => {
    //Mock up router to avoid useEffect error on render
    //Setting isReady to false so the useEffect stops (line 25 in component)
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ isReady: false }));
    render(<RecipeResults />);
    const noResultText = screen.getByText(/please check back in future/i);
    expect(noResultText).toBeVisible();
  });
});
