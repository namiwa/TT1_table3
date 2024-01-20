
import {Request, Response, NextFunction} from 'express';

const globalErrorHandler= (err: any, req: Request, res: Response, next: NextFunction) => {
    // This is how you get the message from the error
    const message = err.message
    const status = err.status || 500;
    const errorObj = {
        message: 'Internal Server Error 500!'
    };

    res.status(status).json(errorObj);
};

export default  globalErrorHandler;
