import express from "express";
import {getUser , getUserId , createUser , updateUser , deleteUser} from "../controllers/userController.js";

const router = express.Router();

router.get("/" , (req , res) =>{
    res.send("This is Default Page");
})

router.get("/users" , getUser);
router.get("/users/:id", getUserId);
router.post("/users" , createUser);
router.put("/users/:id" , updateUser);
router.delete("/users/:id" , deleteUser);

export default router;
