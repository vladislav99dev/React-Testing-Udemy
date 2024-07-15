import { screen, render, within } from "@testing-library/react";
import { Matchers } from "./Matchers";

test("the form displays two buttons", () => {
  render(<Matchers />);

  const form = screen.getByRole("form");

  const buttons = within(form).getAllByRole("button");

  expect(buttons).toHaveLength(2);
});
