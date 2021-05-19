import express from 'express';

import routes from './routes';
import * as config from './config/config';
import errorHandler from './middlewares/errorHandler';
import redirectBadUrl from './middlewares/redirectBadUrl';
import * as expressConfig from './config/express';

const app = express();
const appString = `Server is ready, listening on port: ${config.default.port}...`;

require('./config/database');
expressConfig.default(app);

app.use(routes);
app.use(redirectBadUrl);
app.use(errorHandler);

app.listen(config.default.port, console.log(appString));