import { LoginInput, Member, MemberInput } from "../libs/types/member";
import { T } from "../libs/types/common"
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";

const memberService = new MemberService()

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log('Signup')
        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);
        // TODO: TOKENS

        res.json({ member: result })
    } catch (error) {
        console.log("Error, Signup", error)
        if (error instanceof Errors) res.status(error.code).json(error)
        else res.status(Errors.standard.code).json(Errors.standard);

    }
}

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('Login')
        const input: LoginInput = req.body,
            result = await memberService.login(input);
        // TODO: TOKENS
        
        res.json({ member: result })
    } catch (error) {
        console.log("Error, Login", error)
        if (error instanceof Errors) res.status(error.code).json(error)
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

export default memberController;