## Backend APIs

**Base URL:** [https://exava-ch2-ps503-408514.et.r.appspot.com/](https://exava-ch2-ps503-408514.et.r.appspot.com/)

### Authentication and Authorization

This API utilizes JWT token-based authentication.

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
| POST | /register | Register a new account | none | email, password | `{"message":"success","data":{"username":"...","email":"..."}}` |
| POST | /login | Login to an account | none | email, password | `{"message": "success", "token": "..."}` |
| GET | /tourism | Get all tourism content | none | yes | `{"message": "success", "data": [ {"Place_Id": ..., "Place_Name": "...", "Description": "...", "Id_Category": ..., "Id_City": ..., "Price": ..., "Rating": ..., "Time_Minutes": ..., "Coordinate": "{lat: ..., lng: ...}", "Lat": "...", "Long": "..."}]}` |
| GET | /tourism/1 | Get specific tourism content | yes | none | `"message": "success", "data": [ {"Place_Id": ..., "Place_Name": "...", "Description": "...", "Id_Category": ..., "Id_City": ..., "Price": ..., "Rating": ..., "Time_Minutes": ..., "Coordinate": "{lat: ..., lng: ...}", "Lat": "...", "Long": "..."}` |
| GET | /tourism/category/{id} | Get tourism by category | yes | none | `"message": "success", "data": [ {"Place_Id": ..., "Place_Name": "...", "Description": "...", "Id_Category": ..., "Id_City": ..., "Price": ..., "Rating": ..., "Time_Minutes": ..., "Coordinate": "{lat: ..., lng: ...}", "Lat": "...", "Long": "..."}` |

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
