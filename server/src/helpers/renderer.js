import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from '../client/Routes';

export default (request, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={request.path} context={{}}>
                <div>{renderRoutes(routes)}</div>
            </StaticRouter>
        </Provider>
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
