// // src/index.tsx
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import express from 'express';
// import App from './src/App';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('*', (req, res) => {
//   const appHtml = ReactDOMServer.renderToString(<App />);
//   const html = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>SSR React with TypeScript</title>
//     </head>
//     <body>
//       <div id="root">${appHtml}</div>
//       <script src="/bundle.js"></script>
//     </body>
//     </html>
//   `;
//   res.send(html);
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on http://localhost:${PORT}`);
// });
