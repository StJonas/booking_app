import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  putUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("hello user, you are an admin")
// })
router.put("/:id", verifyUser, putUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

export default router;
