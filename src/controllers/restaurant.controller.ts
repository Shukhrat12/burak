import {T} from "../libs/types/common"
import { Request, Response } from "express";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome')
        res.send("Home page")
    } catch (error) {
        console.log("Error, goHome", error)
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin')
        res.send('Login page')
    } catch (error) {
        console.log("Error, getLogin", error)
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.send('Signup page')
    } catch (error) {
        console.log("Error, getSignup", error)
    }
}

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log('processLogin')
        res.send('processLogin')
    } catch (err) {
        console.log("Error, processLogin", err)
    }
}

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log('processSignup')
        res.send('processSignup')
    } catch (error) {
        console.log("Error, processSignup", error)
    }
}

export default restaurantController;