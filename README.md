# Next-Auth V.5

> A Custom Authentication Service, built by Next-Auth, Typescript, TailwindCSS, Prisma & Neon Postgresql Database.

![Next-Auth](https://i.ytimg.com/vi/w2h54xz6Ndw/maxresdefault.jpg)

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

## Learn More

To learn more about Next.js, take a look at the following resources:

-  [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-  [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
