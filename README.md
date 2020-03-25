# Next js demo site

Notes and code from following [this](https://www.youtube.com/watch?v=pY0vWYLDDco) tutorial

## Notes

- `npx create-next-app app-name`
- static site generator
- static sites with reusable templates
- we need the template, and some data to fill it
- for dynamic routing use `[slug]`, slug is some identifier for each unique post/item, and its a javascirpt file
- slug is a variable inside of filename/pagepath
- some functions for static site generation
- get static paths, needs to be exported and async
  - it returns and object with paths and some other stuff (fallback)
  - here we need to tell what all of those different paths are
  - like filenames from md files or some other genereated paths and names
  - we need to write all of the code ourselves
- get static props
  - we are returning obejct
  - with property props, this will be returen to our template object
  - this function will receive what the static paths will return
- npm run dev runs devleopment server
- library for parsing markdown metadata - `gray-matter`
- library for convertin md to html - `marked`
- creating links
  - have attribute of href and as
  - href - `/blog/[slug]`
  - as - `"/blog/"+slug`
- deploying
  - `npm run build`
  - see different pages created
  - to make it static `next export`
  - it will be in out folder

# Original Readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
