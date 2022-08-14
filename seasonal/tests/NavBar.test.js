import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//Import router to bypass useEffect
import * as nextRouter from "next/router";
import { NavBar } from "../components/NavBar.js";

describe("NavBar unit tests", () => {
  test("When rendered, shows heading and links to each page", () => {
    //Mock up router to avoid useEffect error on render
    //Setting isReady to false so the useEffect stops (line 27 in component)
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ isReady: false }));
    render(<NavBar />);
    const heading = screen.getByRole("link", { name: /seasonal/i });
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const creditsLink = screen.getByRole("link", { name: /credits/i });
    expect(heading).toBeVisible();
    expect(homeLink).toBeVisible();
    expect(aboutLink).toBeVisible();
    expect(creditsLink).toBeVisible();
  });
});
