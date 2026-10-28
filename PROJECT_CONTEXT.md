# Project Context — TechHub Login Page

## Project Overview

TechHub Login Page is a frontend-only practice project built with HTML, CSS, and vanilla JavaScript. It simulates a login experience locally and does not provide real authentication.

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- No external libraries or build tools

## File Responsibilities

| File | Responsibility |
|---|---|
| `index.html` | Login form structure, labels, icons, and accessibility attributes |
| `style.css` | Dark navy/indigo theme, responsive layout, focus states, and animations |
| `script.js` | Password visibility toggle, input validation, loading state, and simulated submission |

## Implemented Features

- Responsive login interface
- Email and password fields
- Show/hide password toggle
- Required-field validation
- Basic email format validation
- Minimum password length of 8 characters
- Accessible inline feedback
- Simulated loading and success message
- No real backend authentication

## Validation Behavior

- Empty email is rejected.
- Invalid email format is rejected.
- Empty password is rejected.
- Passwords shorter than 8 characters are rejected.
- Valid-format inputs trigger a simulated success flow.

## Security Boundaries

- This is a demonstration, not a production authentication system.
- Never enter real passwords.
- Do not add credential storage or logging.
- Client-side validation does not replace server-side validation.
- Any real authentication feature requires a separately designed backend.

## Development Rules

1. Inspect existing code before making changes.
2. Keep the project simple and dependency-free unless approved otherwise.
3. Do not claim simulated login is real authentication.
4. Test changes in a browser.
5. Ask for approval before significant architectural changes.
6. Do not overwrite existing work without explaining why.
