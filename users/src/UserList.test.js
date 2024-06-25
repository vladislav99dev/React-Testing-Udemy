import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

test("new test", () => {
  render(
    <UserList
      users={[
        { name: "Vladislav", email: "Dorovski" },
        { name: "Vladislavc", email: "Dorovski" },
      ]}
    />
  );

  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);
});
