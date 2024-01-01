# Next-Auth V.5

> A Custom Authentication Service, built by Next-Auth, Typescript, TailwindCSS, Prisma & Neon Postgresql Database.

![Next-Auth](https://i.ytimg.com/vi/w2h54xz6Ndw/maxresdefault.jpg)

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

Create auth custom components, button & form, card-wrapper, header, back-button, social. Add shadcn-ui card component to design the loginForm component.

## Learn More

To learn more about Next.js, take a look at the following resources:

-  [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-  [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
