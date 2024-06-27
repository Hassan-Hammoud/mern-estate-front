import express from "express";
import { test } from "../controllers/user.controller.js";
// import User from "../models/user.model";

const router = express.Router();

router.get("/test", test);

export default router;
