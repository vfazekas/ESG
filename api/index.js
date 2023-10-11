import express from "express";
import userRoutes from "./routes/user.js";
import cors from "cors";
import session from "express-session";

const app = express()
app.use(express.json());
app.use(cors());
app.use(session({
secret:'zekas',
resave:false,
saveUninitialized: true,
}));

app.use("/", userRoutes);

app.listen(8800);