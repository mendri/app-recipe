import express from "express";
import cors from "cors";
import loginRoutes from "./Api/Routes/login.routes";
import registerRoutes from "./Api/Routes/register.routes";
import errorHandler from "./Api/Middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use(errorHandler);

export default app;
