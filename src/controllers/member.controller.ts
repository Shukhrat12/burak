import {T} from "../libs/types/common"
import { Request, Response } from "express";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home page")
    } catch (error) {
        console.log("Error, goHome", error)
    }
}

memberController.getLogin = (req: Request, res: Response) => {
    try {
        res.send('Login page')
    } catch (error) {
        console.log("Error, getLogin", error)
    }
}

memberController.getSignup = (req: Request, res: Response) => {
    try {
        res.send('Signup page')
    } catch (error) {
        console.log("Error, getSignup", error)
    }
}

export default memberController;