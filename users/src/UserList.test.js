import { screen, render } from "@testing-library/react";
import UserList from "./UserList";

test("new test", () => {
  render(<UserList users={[{ name: "Vladislav", email: "Dorovski" }]} />);

  const rows = screen.getAllByRole("row");

  expect(rows).toHaveLength(2);
});
