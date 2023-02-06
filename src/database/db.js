const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDataBase = () => {
    console.log('Wait connection to the database.');

    mongoose.connect(
        'mongodb+srv://GabrielS:8pjV9Pe1fJTogd1M@cluster0.wtqlqar.mongodb.net/?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Conexão com MongoDB efetuada.`))
        .catch((e) => console.log(`Conexão com MongoDB falhou. ${e}`));
};

module.exports = connectDataBase;
