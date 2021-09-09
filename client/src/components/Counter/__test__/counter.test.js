import React from "react";
import { Counter } from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
});

test("Header renders correct text", () => {
    const headerEl = getByTestId("header");

    expect(headerEl).toHaveTextContent("Counter");
});

test("Counter initially start with text 0", () => {
    const counterEl = getByTestId("counter");

    expect(counterEl).toHaveTextContent("0");
});

test("Input element to have initial value 1", () => {
    const inputEl = getByTestId("input");

    expect(inputEl).toHaveValue(1);
});

test("Add button renders with +", () => {
    const addBtn = getByTestId("add-btn");

    expect(addBtn).toHaveTextContent("+");
});

test("subtract button renders with -", () => {
    const subtractBtn = getByTestId("subtract-btn");

    expect(subtractBtn).toHaveTextContent("-");
});

test("Change value of input works correctly", () => {
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: { value: "5" },
    });

    expect(inputEl.value).toBe("5");
});

test("Click on + btn adds 1 to counter", () => {
    const btnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl).toHaveTextContent("0");

    fireEvent.click(btnEl);

    expect(counterEl).toHaveTextContent("1");
});

test("Click on - btn subtracts 1 from counter", () => {
    const btnEl = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl).toHaveTextContent("0");

    fireEvent.click(btnEl);

    expect(counterEl).toHaveTextContent("-1");
});

test("Changing input value then clicking on add btn works correctly", () => {
    const btnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: 5,
        },
    });

    fireEvent.click(btnEl);

    expect(counterEl).toHaveTextContent("5");
});

test("Changing input value then clicking on subtract btn works correctly", () => {
    const btnEl = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: 5,
        },
    });

    fireEvent.click(btnEl);

    expect(counterEl).toHaveTextContent("-5");
});

test("adding and substracting leads to the correct counter number", () => {
    const addBtnEl = getByTestId("add-btn");
    const subtractBtnEl = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: { value: "10" },
    });

    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl).toHaveTextContent("20");
});

test("counter element to have no class", () => {
    const counterEl = getByTestId("counter");

    expect(counterEl.className).toBe("");
});
