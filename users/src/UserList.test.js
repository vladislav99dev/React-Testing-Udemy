import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "Vladislav", email: "Dorovski" },
    { name: "Vladislavc", email: "DorovskiI" },
  ];
  
  const { container } = render(<UserList users={users} />);

  return {
    users,
    container,
  };
}

test("test users rendering", () => {
  const { container } = renderComponent();

  const rows = container.querySelectorAll("tbody tr");

  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const { users } = renderComponent();

  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }

  screen.logTestingPlaygroundURL();
});
