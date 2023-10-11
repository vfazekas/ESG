import express from "express";
import { getUsers } from "../controllers/user.js";

const router = express.Router()

router.post("/", getUsers)


export default router