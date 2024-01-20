import {allowedOrigins} from "./allowedOrigins";
/*
 * Configuration for cors
 * */
const corsOptions = {
    origin: (origin: any, callback: any) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.log("not allowed")
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};

export default corsOptions
