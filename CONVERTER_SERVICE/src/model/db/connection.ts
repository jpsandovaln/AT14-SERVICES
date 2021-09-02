import { Config } from "../../config";
import mongoose from "mongoose";
export class Connection extends Config {
    constructor() {
        super();
        mongoose
            .connect(this.db + "", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then((db: any) =>
                console.log("Db is connected to", db.connection.host)
            )
            .catch((err: Error) => console.error(err));
    }
}
