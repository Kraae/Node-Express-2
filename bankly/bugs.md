changed "getAll(username, password)" to "getAll()" in the bankly/users/models.
had to change things around in middleware/auth.js.  Added token verification.
had to add throw to the error in user.js for get(username)

in routes/auth there was no await in the async function for /login.  fixed.
in routes/users.js the delete(/:username) route.  Had to add await for response.