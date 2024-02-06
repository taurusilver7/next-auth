/*An array of public routes accessed by all (non-authorized) users. No authentication required.
 @type {String[]}
 */

export const publicRoutes = ["/", "/auth/new-verification"];

/*An array of private routes accessed only by authorized users. Required Authentication
 @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/*
A prefix for api auth routes. 
Routes used for api authentication. Never to be stopped & protected.
@type {string}
*/

export const apiAuthPrefix = "/api/auth";

/*
A default redirect path after logging in
@type {string}
*/

export const DEFAULT_LOGIN_REDIRECT = "/settings";
