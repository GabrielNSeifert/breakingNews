const express = require('express');
const app = express();
const connectDataBase = require('./src/database/db');

const userRoute = require('./src/routes/user.route');

const port = 3000;

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
