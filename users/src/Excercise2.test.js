import { render, screen } from "@testing-library/react";
import Exercise2 from "./Exercise2";

test("getBy,queryBy,findBy reacting to finding 0 elements", async () => {
  // we are focused on prefixes
  // getByRole!
  // findByRole!
  // queryByRole!
  render(<Exercise2 />);

  expect(() => {
    screen.getAllByRole("textbox");
  }).toThrow();

  expect(screen.queryByRole("textbox")).toEqual(null);

  let errorThrown = false;
  try {
    await screen.findByRole("textbox");
  } catch (error) {
    errorThrown = true;
  }

  expect(errorThrown).toEqual(true);
});
