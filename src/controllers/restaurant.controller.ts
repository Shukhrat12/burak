import MemberService from "../models/Member.service";
import { T } from "../libs/types/common"
import { Request, Response } from "express";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum"
import Errors, { Message } from "../libs/Errors";

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
        res.redirect('/admin')
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup')
        res.render("signup")
    } catch (error) {
        console.log("Error, getSignup", error)
        res.redirect('/admin')
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
    } catch (err) {
        console.log("Error, processSignup", err)
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("Hi, ${message}"); window.location.replace('admin/signup') </script>`);

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
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("Hi, ${message}"); window.location.replace('admin/login') </script>`);
    }
}

restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log('checkAuthSession')
        if (req.session?.member) {
            res.send(`<script> alert("Hi, ${req.session.member.memberNick}") </script>`);
        } else {
            res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`)
        }
    } catch (err) {
        console.log("Error, checkAuthSession", err)
        res.send(err)
    }
}

restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log('logout')
        req.session.destroy(function () {
            res.redirect("/admin")
        })
    } catch (err) {
        console.log("Error, processLogin", err)
        res.redirect("/admin")
    }
}


export default restaurantController;