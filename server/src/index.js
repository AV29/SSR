import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import routes from './client/routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(routes, req.path)
        .map(({ route }) => route.loadData ? route.loadData(store) : null);

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    }).catch(err => {});
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
