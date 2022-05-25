import { Request } from 'express';
import { Response } from 'express-serve-static-core';
import os from 'os';

class ExampleController {
    getExampleResponse(_req: Request, res: Response) {
        res.status(200).send("Example Response!");
    }

    createSomething(_req: Request, res: Response) {
        res.status(201).json({ userId: 0, userName: "example" }).send();
    }

    getHostName(_req: Request, res: Response) {
        res.send(`Hi from ${os.hostname()}!`);
    }
}

export default new ExampleController();

