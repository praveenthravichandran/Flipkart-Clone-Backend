import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.fdvft.mongodb.net:27017,ecommerceweb-shard-00-01.fdvft.mongodb.net:27017,ecommerceweb-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-8a6bhp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL = `mongodb://${username}:${password}@ecommerce-shard-00-00.fdvft.mongodb.net:27017,ecommerce-shard-00-01.fdvft.mongodb.net:27017,ecommerce-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ilaj5d-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL = `mongodb://${username}:${password}@ac-dpm1db2-shard-00-00.jqk5in1.mongodb.net:27017,ac-dpm1db2-shard-00-01.jqk5in1.mongodb.net:27017,ac-dpm1db2-shard-00-02.jqk5in1.mongodb.net:27017/?ssl=true&replicaSet=atlas-uiv1ka-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;