import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./components/Counter/Counter";

test("renders Counter Component", () => {
  render(<Counter />);
  const counter = screen.getByText(/20/);
  expect(counter).toBeInTheDocument();
});

test("should render the increment button", () => {
  render(<Counter />);
  const incrementBtn = screen.getByRole("button", { name: "Increment" });
  expect(incrementBtn).toBeInTheDocument();
  expect(incrementBtn).toBeEnabled();
});

test("When user clicks on the increment button the counter should be increase", () => {
  render(<Counter />);
  const counter = screen.getByText(/20/);
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent(/20/);

  // Simulating Click Event on Increment Button
  const incrementBtn = screen.getByRole("button", { name: "Increment" });
  fireEvent.click(incrementBtn);
  expect(counter).toHaveTextContent(/21/);
});

test("should render the decrement button", () => {
  render(<Counter />);
  const decrementBtn = screen.getByRole("button", { name: "Decrement" });
  expect(decrementBtn).toBeInTheDocument();
  expect(decrementBtn).toBeEnabled();
});

test("When user clicks on the decrement button the counter should be decreased", () => {
  render(<Counter />);
  const counter = screen.getByText(/20/);
  expect(counter).toBeInTheDocument();
  expect(counter).toHaveTextContent(/20/);
  const decrementBtn = screen.getByRole("button", { name: "Decrement" });
  // Simulating Click Event on Decrement Button
  fireEvent.click(decrementBtn);
  expect(counter).toHaveTextContent(/19/);
});
