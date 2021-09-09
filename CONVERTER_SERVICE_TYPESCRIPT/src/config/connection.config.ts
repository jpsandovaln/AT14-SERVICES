import { Config } from "./config";
import { IConnectionConfig } from "./interfaces/connection.config.interface";
import mongoose from "mongoose";

export abstract class ConnectionConfig
    extends Config
    implements IConnectionConfig
{
    dbConnection = process.env.DB_CONNECTION;

    constructor() {
        super();
        this.initConnection();
    }

    initConnection(): void {
        mongoose
            .connect(this.dbConnection + "", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then((db: any) =>
                console.log("Db is connected to", db.connection.host)
            )
            .catch((err: Error) => console.error(err));
    }
}
