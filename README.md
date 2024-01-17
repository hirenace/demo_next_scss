
# Next.js with SCSS

Demo for next.js with scss

## Run Locally

1. Clone the project

```bash
  git clone https://github.com/hirenace/demo_next_scss
```

2. Go to the project directory

```bash
  cd demo_next_scss
```

3. Install dependencies

```bash
  pnpm install
```

4. Start the local server

```bash
  pnpm dev
```

5. Login mechanism using by fake API
```bash
  (https://dummyjson.com/docs/auth)
  username - kminchelle
  password - 0lelplR
```

## Running Tests

To run test casess, run the following command

```bash
  pnpm test
```


## Build

```bash
  pnpm build
```


## NPM Versioning

![Static Badge](https://img.shields.io/badge/node-v20.8.0-green?link=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload) ![Static Badge](https://img.shields.io/badge/pnpm-v8_13_1-vintage?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fpnpm%2Fv%2F8.13.1) ![Static Badge](https://img.shields.io/badge/npm-v10_1_0-gold?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fnpm%2Fv%2F10.1.0) ![Static Badge](https://img.shields.io/badge/react-v19_2_0-blue?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact%2Fv%2F18.2.0) ![Static Badge](https://img.shields.io/badge/next-v14_0_4-red?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fnext%2Fv%2F14.0.4) ![Static Badge](https://img.shields.io/badge/sass-v1_69_5-purple?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fsass%2Fv%2F1.69.5)

## Usage/Examples

```javascript
  import React, { useEffect } from 'react';

  import '../styles/global.css';

  const MyApp = ({ Component, pageProps }) => {
      return <Component {...pageProps} />;
  }

  export default MyApp;

```

## Acknowledgements
 - [Next Js](https://nextjs.org/docs)
 - [React JS](https://react.dev/learn)
 - [Typescript](https://www.typescriptlang.org/docs/)
