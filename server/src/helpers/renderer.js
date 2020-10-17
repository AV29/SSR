import React from 'react';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import routes from '../client/routes';

export default (request, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={request.path} context={context}>
                <div>{renderRoutes(routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();

    return `
      <html>
      <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="icon" href="data:,">
      </head>
      <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())};
            </script>
            <script src="bundle.js"></script>
      </body>
      </html>
    `;
};
