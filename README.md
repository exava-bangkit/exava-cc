## Backend APIs

**Base URL:** [https://exava-ch2-ps503-408514.et.r.appspot.com/](https://exava-ch2-ps503-408514.et.r.appspot.com/)

### Authentication and Authorization

This API utilizes JWT token-based authentication. All endpoints except `/api/test/all` require a valid token for access. You can obtain tokens through signup and signin processes.

### Endpoints

Each endpoint is described with details including:

* **Method:** HTTP method used (GET, POST, PUT, etc.)
* **URL:** Path of the endpoint.
* **Action:** Brief description of the endpoint's purpose.
* **Authorization:** Whether token is required and the necessary access level (none, public, user, moderator, admin).
* **Request (optional):** Required parameters and their descriptions.
* **Response (optional):** Data structure returned and descriptions of each field.

### Endpoint List

| Method | URL | Action | Authorization | Request | Response |
|---|---|---|---|---|---|
| POST | /api/auth/signup | Register a new account | none | email, password | `{ message: "Successful signup!" }` |
| POST | /api/auth/signin | Login to an account | none | email, password | `{ token: "your_token", userId: 123 }` |
| POST | /api/auth/signout | Logout from an account | token | none | `{ message: "Logged out successfully!" }` |
| GET | /api/test/all | Retrieve public content | none | none | `{ publicContent: "This is public data!" }` |
| GET | /api/test/user | Access User's content | token, user | none | `{ userContent: "This is user-specific data!" }` |
| GET | /api/test/mod | Access Moderator's content | token, moderator | none | `{ moderatorContent: "This is moderator-only data!" }` |
| GET | /api/test/admin | Access Admin's content | token, admin | none | `{ adminContent: "This is admin-exclusive data!" }` |

### Authentication and Authorization Details

* **Valid token required for all endpoints except `/api/test/all`.**
* Tokens are generated upon successful signup and signin.
* Tokens are stored in session cookies (`req.session.token`).
* The `verifyToken` middleware verifies tokens and extracts user ID from the payload.
* The `isAdmin`, `isModerator`, and `isModeratorOrAdmin` middlewares control access based on user roles.

### Common Errors

* **401 Unauthorized:** Invalid or missing token.
* **403 Forbidden:** Insufficient access due to insufficient user role.
* **500 Internal Server Error:** Internal server error occurred.

### Notes

* This documentation is under development and may change with API updates.
* Please report issues or ask questions through the issue tracker in your GitHub repository.

We hope this documentation helps you use the API effectively!

### Additional Code Comments

**authJWT.js:**

Consider utilizing this module separately and eliminating code duplication with the existing authJWT.js.

**verifySignUp.js:**

This module appears identical to authJWT.js and might be unnecessary due to function duplication.

**Please remember that this is a sample documentation framework and may need adjustments based on your specific API specifications.**

