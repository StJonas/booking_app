import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("user has been created");
  } catch (err) {}
};

export const login = async (req, res, next) => {
  try {
    const user = await user.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "user not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "password wrong"));

    const token = jwt.sign(
      { id: user_id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie("acces_token", token, {httpOnly:true}).status(201).json({ ...otherDetails });
  } catch (err) {}
};
