import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const connectDataBase = () => {
    console.log('Wait connection to the database.');

    mongoose.connect( process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Conexão com MongoDB efetuada.`))
        .catch((e) => console.log(`Conexão com MongoDB falhou. ${e}`));
};

export default connectDataBase;
    