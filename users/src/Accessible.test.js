import { render, screen } from "@testing-library/react"
import AccessibleNames from "./AccessibleNames"


test("can select by accessible name", () => {
    render(<AccessibleNames />)

    const submitButton = screen.getByText("Submit")
    const cancelButton = screen.getByText("Cancel")

    const getByRoleTestCancel = screen.getByRole("button", { name: /cancel/i })
    const getByRoleTestSubmit = screen.getByRole("button", { name: /submit/i })

    expect(submitButton || getByRoleTestSubmit).toBeInTheDocument();
    expect(cancelButton || getByRoleTestCancel).toBeInTheDocument();
})

test('shows an email and a search input', () => {
    render(<AccessibleNames />)

    const emailInput = screen.getByRole('textbox', { name: /email/i })
    const searchInput = screen.getByRole('textbox', { name: /search/i })

    expect(emailInput).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
})

test('test svg buttons show', () => {
    render(<AccessibleNames />)
    const signInButton = screen.getByRole("button", { name: /sign in/i })
    const signOutButton = screen.getByRole("button", { name: /sign out/i })  

    expect(signInButton).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();   
})