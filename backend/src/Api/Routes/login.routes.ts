import express from "express";
import LoginController from "../Controllers/login.controller";

const router = express.Router();

router.post("/", (req, res, next) => new LoginController(req, res, next).login());

export default router;