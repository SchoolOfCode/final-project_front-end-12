import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//Import router to bypass useEffect
import * as nextRouter from "next/router";
import { ResultsItem } from "../components/ResultsItem.js";

describe("ResultsItem unit tests", () => {
  test("When rendered and receives no results from API, should show a message confirming this", () => {
    //Mock up router to avoid useEffect error on render
    //Setting isReady to false so the useEffect stops (line 23 in component)
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ isReady: false }));
    render(<ResultsItem />);
    const noResultText = screen.getByText(/try a new search/i);
    expect(noResultText).toBeVisible();
  });
});
