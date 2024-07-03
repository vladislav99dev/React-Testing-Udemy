import { render, screen } from "@testing-library/react";
import QueryFnBehaiviors from "./QueryFnBehaiviors";

test("getBy,queryBy,findBy reacting to finding 0 elements", async () => {
  // we are focused on prefixes
  // getByRole!
  // findByRole!
  // queryByRole!
  render(<QueryFnBehaiviors />);

  expect(() => {
    screen.getByRole("textbox");
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

test("getBy,queryBy,findBy when finding one element", async () => {
  render(<QueryFnBehaiviors />);

  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.queryByRole("list")).toBeInTheDocument();
  expect(await screen.findByRole("list")).toBeInTheDocument();
});

test("getBy,queryBy,findBy when finding > 1 elements", async () => {
  render(<QueryFnBehaiviors />);

  expect(() => {
    screen.getByRole("listitem");
  }).toThrow();

  expect(() => screen.queryByRole("listitem")).toThrow();

  let errorThrown = false;
  try {
    await screen.findByRole("listitem");
  } catch (error) {
    errorThrown = true;
  }

  expect(errorThrown).toEqual(true);
});

test("asynchronous test", async () => {
  render(<QueryFnBehaiviors />);

  const personData = await screen.findByRole("listitem", { name: /vladi/i });

  expect(personData).toBeInTheDocument();
});
