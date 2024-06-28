import { render, screen } from "@testing-library/react"
import Exercise from "./Exercise"


test("can find elements by role", () => {
    render(<Exercise />)

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