import express from "express";
import RegisterController from "../Controllers/register.controller";

const router = express.Router();

router.post("/", (req, res, next) => new RegisterController(req, res, next).register());

export default router;