import { screen, render, within } from "@testing-library/react";
import { Matchers } from "./Matchers";

const toContainRole = (containerElement, elementRole, expectedLength) => {
  const elementsFound = within(containerElement).getAllByRole(elementRole);

  if (elementsFound.length === expectedLength) return { pass: true };
  return {
    pass: false,
    message: () =>
      `the ${containerElement.elementType} did not contain ${expectedLength} ${elementRole}`,
  };
};

expect.extend({ toContainRole });

test("the form displays two buttons", () => {
  render(<Matchers />);

  const form = screen.getByRole("form");

  expect(form).toContainRole("button", 3);
});
