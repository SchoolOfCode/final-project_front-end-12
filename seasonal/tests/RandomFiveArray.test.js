import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RandomFiveArray } from "../components/RandomFiveArray";

describe("RandomFiveArray unit tests", () => {
  test("When rendered with no timeStamp, should call getMonth function", () => {
    const testFunction = jest.fn();
    render(<RandomFiveArray timeStamp={""} getMonth={testFunction} />);
    expect(testFunction).toHaveBeenCalled();
  });
  test("When rendered and receives no results from API, should show an error message", () => {
    const testFunction = jest.fn();
    render(<RandomFiveArray timeStamp={""} getMonth={testFunction} />);
    const noResultText = screen.getByText(/please refresh to try again/i);
    expect(noResultText).toBeVisible();
  });
});
