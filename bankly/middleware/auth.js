// /** Middleware for handling req authorization for routes. */

// const jwt = require('jsonwebtoken');
// const { SECRET_KEY } = require('../config');


// /** Authenticate TOKEN */
// function authenticateJWT(req, res, next) {
//   try {
//     const authHeader = req.headers && req.headers.authorization;
//     if (authHeader) {
//       const token = authHeader.replace(/^[Bb]earer /, "").trim();
//       res.locals.user = jwt.verify(token, SECRET_KEY);
//     }
//     return next();
//   } catch (err) {
//     return next();
//   }
// }

// /** Authorization Middleware: Requires user is logged in. */

// function requireLogin(req, res, next) {
//   try {
//     if (res.locals.user) {
//       return next();
//     } else {
//       return next({ status: 401, message: 'Unauthorized' });
//     }
//   } catch (err) {
//     return next(err);
//   }
// }

// /** Authorization Middleware: Requires user is logged in and is staff. */

// function requireAdmin(req, res, next) {
//   try {
//     if (req.curr_admin) {
//       return next();
//     } else {
//       return next({ status: 401, message: 'Unauthorized' });
//     }
//   } catch (err) {
//     return next(err);
//   }
// }

// /** Authentication Middleware: put user on request
//  *
//  * If there is a token, verify it, get payload (username/admin),
//  * and store the username/admin on the request, so other middleware/routes
//  * can use it.
// *
// * It's fine if there's no token---if not, don't set anything on the
// * request.
// *
// * If the token is invalid, an error will be raised.
// *
// **/

// function authUser(req, res, next) {
//   try {
//     // const token = req.body._token || req.query._token;
//     const authHeader = req.headers && req.headers.authorization;
//     const token = authHeader.replace(/^[Bb]earer /, "").trim();
//     if (token) {
//       let payload = jwt.decode(token);
//       req.curr_username = payload.username;
//       req.curr_admin = payload.admin;
//     }
//     return next();
//   } catch (err) {
//     err.status = 401;
//     return next(err);
//   }
// } // end

// module.exports = {
//   requireLogin,
//   requireAdmin,
//   authUser,
//   authenticateJWT,
// };

/** Middleware for handling req authorization for routes. */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Authorization Middleware: Requires user is logged in. */

function requireLogin(req, res, next) {
  try {
    if (req.curr_username) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authorization Middleware: Requires user is logged in and is staff. */

function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authentication Middleware: put user on request
 *
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 *
 * It's fine if there's no token---if not, don't set anything on the
 * request.
 *
 * If the token is invalid, an error will be raised.
 *
 **/

function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token;
    if (token) {
      // BUG: uses decode, not verify
      // let {username, staff} = jwt.decode(token, SECRET_KEY);
      let payload = jwt.verify(token, SECRET_KEY);
      req.curr_username = payload.username;
      req.curr_admin = payload.admin;
    }
    return next();
  } catch (err) {
    err.status = 401;
    return next(err);
  }
} // end

module.exports = {
  requireLogin,
  requireAdmin,
  authUser
};

