import React from 'react'

const AccessibleNames = () => {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" />

            <label htmlFor="search">Search</label>
            <input id="search" />

            <button>Submit</button>
            <button>Cancel</button>

            <button aria-label="sign in">
                <svg />
            </button>
            <button aria-label="sign out">
                <svg />
            </button>
        </div>
    )
}

export default AccessibleNames