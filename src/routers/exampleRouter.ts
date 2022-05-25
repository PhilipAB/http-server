import express, { Router } from "express";
import { body } from "express-validator";
import validationErrorHandler from "../middleware/validation/ValidationErrorHandler";
import exampleController from "../controllers/ExampleController";

export const exampleRouter: Router = express.Router();

exampleRouter.use(express.json());

exampleRouter.post('/create',
    body('name').notEmpty().isString()
        .escape().trim(),
    body('role').isIn(['Value1', 'Value2']),
    validationErrorHandler.handleGeneralValidationError,
    exampleController.createSomething);

exampleRouter.get('/get',
    exampleController.getExampleResponse);

exampleRouter.get('/hostname',
    exampleController.getHostName);

