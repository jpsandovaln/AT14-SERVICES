import mongoose from "mongoose";

export class ConnectMongo{
    constructor() { }

    static connect(): void {
        const conexionString = 'mongodb://' + process.env.IP_MONGO + ':27018/converterDB';
        mongoose.connect(conexionString,{ 
            useNewUrlParser: true, useUnifiedTopology: true 
        })
            .then(db => console.log('Db is connected to', db.connection.host))
            .catch(err=> console.error(err));
    }    
}



