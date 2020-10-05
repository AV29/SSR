import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default request => {
    const content = renderToString(
        <StaticRouter location={request.path} context={{}}>
            <Routes />
        </StaticRouter>
    );

    return `
      <html>
      <head>
            <link rel="icon" href="data:,">
      </head>
      <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
      </body>
      </html>
    `;
};