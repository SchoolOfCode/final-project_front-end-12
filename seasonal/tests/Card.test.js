import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//Import router to bypass useEffect
import * as nextRouter from "next/router";
import Card from "../components/Card.js";

describe("Card unit tests", () => {
  test("When rendered and receives no results from API, should show a message confirming that", () => {
    //Mock up router to avoid useEffect error on render
    //Setting isReady to false so the useEffect stops (line 21 in component)
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ isReady: false }));
    render(<Card />);
    const noResultText = screen.getByText(/please check your search term/i);
    expect(noResultText).toBeVisible();
  });
});
