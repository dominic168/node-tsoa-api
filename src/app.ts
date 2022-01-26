import express from 'express';
import { RegisterRoutes } from './api/routes/routes';
import { json, urlencoded } from 'body-parser';
import { handleErrors, notFoundHandler } from './api/errors/handle-errors';

const app = express();
const port = process.env.PORT || 4001;

app.use(urlencoded({ extended: true }));

app.use(json());

RegisterRoutes(app);

app.use(notFoundHandler);

app.use(handleErrors);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
