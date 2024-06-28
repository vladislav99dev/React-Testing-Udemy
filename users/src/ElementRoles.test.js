import { render, screen } from "@testing-library/react"
import ElementRoles from "./ElementRoles"


test("can find elements by role", () => {
    render(<ElementRoles />)

    const roles = [
        'link',
        'button',
        'contentinfo',
        'heading',
        'banner',
        'img',
        'checkbox',
        'spinbutton',
        'textbox',
        'listitem',
        'list',
    ]
    for (const role of roles) {
        const element = screen.getByRole(role)
        expect(element).toBeInTheDocument();
    }
})