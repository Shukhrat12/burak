import MemberService from "../models/Member.service";
import { T } from "../libs/types/common"
import { Request, Response } from "express";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum"

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome')
        res.render("home")
    } catch (error) {
        console.log("Error, goHome", error)
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin')
        res.render("login")
    } catch (error) {
        console.log("Error, getLogin", error);
        res.send(error)
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.render("signup")
    } catch (error) {
        console.log("Error, getSignup", error)
    }
}

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processSignup')

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        req.session.member = result;
        req.session.save(function () {
            res.send(result)
        });
    } catch (error) {
        console.log("Error, processSignup", error)
        res.send(error)
    }
}

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log('processLogin')
        console.log("body", req.body)
        const input: LoginInput = req.body;

        const memberService = new MemberService();

        const result = await memberService.processLogin(input);

        req.session.member = result;
        req.session.save(function () {
            res.send(result)
        });
    } catch (err) {
        console.log("Error, processLogin", err)
        res.send(err)
    }
}

export default restaurantController;