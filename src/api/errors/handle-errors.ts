import { Request as ExRequest, Response as ExResponse, NextFunction } from 'express';
import { ValidateError } from 'tsoa';

const handleErrors = (err: unknown, req: ExRequest, res: ExResponse, next: NextFunction): ExResponse | void => {
    if(err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        return res.status(422).json({
          message: "Validation Failed",
          details: err?.fields,
        });    
      }  
    
      if (err instanceof Error) {
        return res.status(500).json({
          message: "Internal Server Error",
        });
      }
    
      next();
};

const notFoundHandler = (_req: ExRequest, res: ExResponse) => {
    res.status(404).send({
        message: "Path Not Found",
      });
}

export { handleErrors, notFoundHandler };