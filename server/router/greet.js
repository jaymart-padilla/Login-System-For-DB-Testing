import express from "express";
const router = express.Router();

import { getUser } from "../controller/greet.js";
import Authentication from "../middleware/Authentication.js";

router.get("/", Authentication, getUser);

export default router;
