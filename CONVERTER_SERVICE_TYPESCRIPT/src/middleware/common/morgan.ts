import morgan, { StreamOptions } from "morgan";

import Logger from "../../utilities/logger";

const stream: StreamOptions = {
    write: (message: string) => Logger.http(message),
};

const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};

const morganMiddleware = morgan(
    //':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agenta"',
    ":method :url :status :res[content-length] - :response-time ms",
    { stream, skip }
);

export default morganMiddleware;
