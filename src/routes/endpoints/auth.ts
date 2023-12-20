import { Request, ResponseToolkit } from "@hapi/hapi";
import { iroute } from "../../config/interfaces";
import {loginController, registerController} from "../../controllers/auth.controller"

const loginRoutes: iroute = {
    method: "POST",
    path: "/login",
    handler: loginController,
    config: {auth: false}
}

const registerRoutes: iroute = {
    method: "POST",
    path: "/register",
    handler: registerController,
    config: {auth: false}
}

export {loginRoutes, registerRoutes}