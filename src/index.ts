import * as express from 'express';
import router from './routes'

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Servidor disponible en  http://localhost:${PORT}/`)
});

