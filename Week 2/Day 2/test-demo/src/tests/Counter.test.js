import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

test('Testing increment counter', () => {
    render(<Counter/>);

    const counter = screen.getByTestId("counter")
    const incrementBtn = screen.getByTestId("increment")

    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("1")
 })

 test('Testing decrement counter', () => {
    render(<Counter/>);

    const counter = screen.getByTestId("counter")
    const decrementBtn = screen.getByTestId("decrement")

    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent("-1")
 })