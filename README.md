# Next-Auth V.5

> A Custom Authentication Service, built by Next-Auth, Typescript, TailwindCSS, Prisma & Neon Postgresql Database.

![Next-Auth](https://i.ibb.co/M2fsvMq/next-auth.jpg)

## Key Features

-  🔐 Next.js 14 with Next-Auth v5 & server actions
-  🔑 Credentials Provider& OAuth Provider (Social login with Google & GitHub)
-  🔒 Email verification & Forgot password functionality
-  📱 Two factor verification (2FA)
-  👥 User roles (Admin & User)
-  🔓 Login component (Opens in redirect or modal) & Register component.
-  ✅ Forgot password, email-verification component
-  🔍 Exploring next.js middleware, next-auth sessions & next-auth callbacks.
-  👤 useCurrentUser & useRole hooks.
-  🧑 currentUser & currentRole utilities.
-  🚧 Render content for admins using RoleGate component
-  🛡️ Protect API Routes & Server Actions for admins only.
-  📧 Change email with new verification in Settings
-  🔑 Change password with old password confirmation in Settings
-  🔔 Enable/disable two-factor auth in Settings.
-  🔄 Change user role in Settings page (for development only)

## Availabel Scripts

First, run the development server:

```bash
npx create-next-app@latest --typescript --tailwind --esling
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Add [shadcn-ui](https://ui.shadcn.com/docs/installation/next), a reusable component library for quick & crisp UI components.

```bash
npx shacn-ui@latest init
# and
npx shadcn-ui@latest add <component_name>
```

## Build

Refactor the starter template & modify the layout & home page.

Add 100% height to all pages in the global stylesheet.

Create a marketing home page, redirecting to the login in auth route. Create a layout for the auth route (login, register, forgot-password)

-  Login

Create auth custom components, button, form, card-wrapper, header, back-button, social. Add shadcn-ui card component to design the loginForm wrapper component.

Create the login-form component with Form & corresponding UI components. Create form-success & form-error message components to display the form status on UI.

The onSubmit form function takes the form input values and feeds the login server action to pass them from client to server.

The startTransition state & the useTransition hook helps the server action in pending states & follow up sequences (.then() method)

The server action code-sequence is almost similar to the api route handling, whatever one may choose.

Validate the credentials on the server side, since validation on client side can be bypassed manually with various means.

-  Register

Create register schema to take & validate the register form inputs. Create register Form component with different propped-child components suitable for register.

Create a register server action to validate the register credentials on the server side.

-  Database

Setup [prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql) orm in the system.

```bash
npm i -D prisma
# and
npm install @prisma/client
# and
npx prisma init
```

Create a prisma util function before initializing prisma instance.

Setup [Neon](https://console.neon.tech) serverless postgresql database. Create a project & get the direct & database_url.

Create a datasource & client generator in the schema before creating a User model.

```bash
npx prisma generate
# and
npx prisma db push
# and
npx prisma studio (to launch a local database)
# and
npx prisma migrate reset (to erase previous records)
```

The generate command let the `lib/db.ts` PrismaClient access the User model in the Schema & the postgres database. Deploy to the serverless module to sync the schema with the database.

Get the appropriate User model sample from [next-auth](https://authjs.dev/reference/adapter/prisma) documentation

Though it was not advised to add password to the User model, to implement the credentials Provider for authentication, add an optional String field for password.

Encrypt the password before storing in the databse during the register server action with `bcrypt`

Restrict a logged in user before email verification. The field `emaiiVerified` in User model restricts the next-auth to never allow a user to completely login.

Follow the [guide](https://authjs.dev/guides/upgrade-to-v5) to update the next-auth to V.5

Create a configuration file for next-auth, along with an auth api route at `/app/api/auth/[...nextauth]/route.ts`.

The Auth requires a secret to encrypt cookies, JWT & other sensitive information. Generate a good secret value [here](https://authjs.dev/reference/core/errors#missingsecret) for production.

Create an auth middleware. It is next.js specific only. For advanced cases, use `auth()` in the middleware. All the routes added to the `matcher` in config only invoke the auth middleware.

Replace the regex pattern in the matcher with [one](https://clerk.com/docs/quickstarts/nextjs) in Clerk documentation.

The public routes consist of the landing/marketing & documentation pages. These can be accessed by non-authorized users too. The rest are all protected routes.

-  Edge Compatibility

Since Prisma is incompatible with Edge runtime/infrastructure, a lot of auth callbacks and events doesn't work in `auth.ts` files system. Separate the auth configuration.

Create `auth.config.ts` to hold all the next-providers & call the middleware

Modify `auth.ts` to add the prisma adapter (along with JWT sessions) and add the auth config to the list.

Create a jwt callback for every token generated. create another callback to extract session & token to get the user infor & id.

Add a role field to the User model (admin & user). Reset the migrate database to start anew. (Perform on in development.)

By tweaking the auth call function around, set the session.user.role as assigned to the global nominal types.

-  OAuth for Socials (Github & Google)

Get the client Id & client_secret strings from corresponding social services. Instead of creating another server action, create an event to trigger the signIn auth function for Google & Github providers.

-  Events

Follow the [guide](https://next-auth.js.org/configuration/events) to create events to handle the email conflicts.

In NextAuth, `Events` are async functions that don't return a response, but are used during log audit, reporting or handling side effects.

The event `linkAccount` was triggered when a user tries oAuth provider to signin to his already registered account. It is triggered when an existing user tries to link their social account.

In such cases, update the already registered account with the emailVerification data, since the social accounts already have performed two-factor authentication & email verification.

Another issue with social login is the account linking. An email linked to a social provider will raise an issue when trying to login with a different social provider. It generates an OAuthAccountLinking error.

Add custom pages routes to the auth, when an email conflict due to logging-in with multiple social accounts arises. Add specific routes & error components to resolve the issue.

-  Credential Verification

Create a schema model to verify the account credentials entered during registration.

Create utility functions to generate tokens based on token (update/recreate) and email. Create lib functions to generateVerficationTokens.

Add the verification sequence into the login & register actions. The login updates the already generated token while the register create (later sends) new verification tokens.

Perform the same action in auth, since next-auth creates custom pages for errors unaddressed and redirects them without supervision. For full security, and seamless UX, restrict the verification sequence in auth.

Create the resend email verification sequence in [resend](https://resend.com/overview) an email service platform. Get the API key.

Create a confirm link and a new route `auth/new-verification` to check on the token sent for verification. Check if it has expired, gone through evenly, or for any other unknown errors. Update the user's email verification status in the database to the verified date.

## Learn More

To learn more about Next.js, take a look at the following resources:

-  [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-  [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
