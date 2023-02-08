import express from 'express';
import connectDataBase from './src/database/db.js';
import userRoute from './src/routes/user.route.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDataBase();

app.use(express.json());
app.use('/user', userRoute);

app.listen(port, () => {
    let sec = 0;
    console.log(`Acessar http://localhost:${port}`);
    setInterval(() => {
        sec = sec + 5;
        console.log(`Servidor executando na porta ${port} || Segundos: ${sec} `);
    }, 5000);
});
