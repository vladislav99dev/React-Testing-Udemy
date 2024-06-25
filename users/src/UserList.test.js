import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

test("test users rendering", () => {
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

test("render the email and name of each user", () => {
  const users = [
    { name: "Vladislav", email: "Dorovski" },
    { name: "Vladislavc", email: "DorovskiI" },
  ];
  render(<UserList users={users} />);

  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }

  screen.logTestingPlaygroundURL();
});
