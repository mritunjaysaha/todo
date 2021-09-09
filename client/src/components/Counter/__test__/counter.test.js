import React from "react";
import { Counter } from "../Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Header renders correct text", () => {
    const { getByTestId } = render(<Counter />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("Counter");
});
