# NextJS Preact PWA Template

![Google Lighthouse Performance Ranking](public/lighthouse.png)

Without Preact
![243kB](public/next-network.png)

With Preact
![116kB](public/next-preact-network.png)

This PWA Template is intended to be hosted on [Vercel](https://vercel.com)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Client-Side Firebase Integration

You can rename the `.env` file to `.env.local` and add your credentials into it and use it in a page like so:

```js
import firebase from '../path/to/lib/firebase';

firebase.firestore().collection('foo').doc('bar').get()
.then(doc => {
    // do stuff
}).catch(err => console.error({ err }))
``` 

Alternatively, you can use [`useSWR`](https://github.com/vercel/swr) and query `api/my-collection` to get firebase data.

```jsx
import useSWR from 'swr'

const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};

export default function WaitableComponent() {
    const { data } = useSWR(`/api/my-collection`, fetcher, { refreshInterval: 6900 });
    if (data) { return <div>{data}</div> }
    else { return <div></div> }
}
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Preact, take a look at the following resources:

- [Preact Documentation](https://preactjs.com/) - learn more about Preact and its optimization.
- [Preact's Github Repo](https://github.com/preactjs/preact) - look at the source code of Preact.


## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

