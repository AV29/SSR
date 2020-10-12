import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { API_ENDPOINT } from './constants';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import routes from './client/routes';

const app = express();
app.use('/api', proxy(API_ENDPOINT, {
    proxyReqOptDecorator: opts => {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req);
    const promises = matchRoutes(routes, req.path)
        .map(({ route }) => route.loadData ? route.loadData(store) : null);

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if(context.notFound) {
            res.status(404);
        }

        res.send(content);
    }).catch(err => {});
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
