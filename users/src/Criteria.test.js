import { render, screen } from "@testing-library/react";
import Criteria from "./Criteria";

test("select different elements", () => {
  render(<Criteria />);

  const els = [
    screen.getByRole("button"),
    screen.getByText("Enter Data"),

    screen.getByLabelText("Email"),
    screen.getByPlaceholderText("Red"),
    screen.getByDisplayValue("dadadad@gmail.com"),
    screen.getByAltText("data.jpg"),
    screen.getByTitle("Click ready to submit"),
    
    screen.getByTestId("image wrapper"),
  ];

  for (const el of els) {
    expect(el).toBeInTheDocument();
  }
});
