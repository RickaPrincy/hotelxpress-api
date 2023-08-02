import { Response } from "express";

type GetHandler<T> = {
    res: Response,
    promise: Promise<T>,
    error: { status?: number, message: string },
    notAcceptNull?: boolean,
}

export function getRequest<T>(config: GetHandler<T>) {
    const { res, promise, error, notAcceptNull } = config;

    promise
        .then(data => {
            if (notAcceptNull && !data)
                res.status(error.status || 200).send({ message: error.message });
            else
                res.send(data);
        })
        .catch(error => {
            console.log(error);
            res.status(error.status || 200).send({ message: error.message });
        })
}