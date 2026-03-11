import { cookieOptions } from "../config/config.js"
import { loginUser, registerUser } from "../services/auth.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"

export const register_user = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    
    // We are calling the service directly without wrapAsync
    const { token, user } = await registerUser(name, email, password);
    
    res.cookie("accessToken", token, cookieOptions);
    res.status(201).json({ success: true, message: "register success", user });
  } catch (error) {
    // THIS WILL PRINT THE REAL ERROR
    console.error("--- REAL ERROR START ---");
    console.error(error); 
    console.error("--- REAL ERROR END ---");
    
    next(error);
  }
};

export const login_user = wrapAsync(async (req, res, next) => { // Added next
  const { email, password } = req.body;
  const { token, user } = await loginUser(email, password);
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ success: true, message: "Login success", user });
});

export const logout_user = wrapAsync(async (req, res, next) => { // Added next
  res.clearCookie("accessToken", cookieOptions);
  res.status(200).json({ success: true, message: "Logout success" });
});

export const get_current_user = wrapAsync(async (req, res, next) => { // Added next
  res.status(200).json({ success: true, user: req.user });
});