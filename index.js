import express from 'express';
import connectDataBase from './src/database/db.js';

import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
import newsRoute from './src/routes/news.route.js';
import swaggerRoute from './src/routes/swagger.route.cjs';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDataBase();

app.use(express.json());
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/news', newsRoute);
app.use('/doc', swaggerRoute);

app.listen(port, () => {
    let min = 0;
    console.log(`Acessar http://localhost:${port}`);
    setInterval(() => {
        min = min + 1;
        console.log(`Servidor executando na porta ${port} || Minutos: ${min} `);
    }, 60000);
});
