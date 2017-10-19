import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(req.headers);
  const content = renderToString(<Home />);
  const html = `
    <html>
      <head></head>
      <body>
        <div id='app'>${content}</div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
