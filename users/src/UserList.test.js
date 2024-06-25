import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

test("new test", () => {
  const { container } = render(
    <UserList
      users={[
        { name: "Vladislav", email: "Dorovski" },
        { name: "Vladislavc", email: "Dorovski" },
      ]}
    />
  );

  const rows = container.querySelectorAll("tbody tr");

  expect(rows).toHaveLength(2);
});
