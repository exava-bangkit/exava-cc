import { Request, ResponseToolkit } from "@hapi/hapi";
import { iroute } from "../../config/interfaces";
import {loginController, profileController, registerController} from "../../controllers/auth.controller"

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

const profileRoutes: iroute = {
    method: "GET",
    path: "/profile",
    handler: profileController,
    config: {auth: "jwt"}
}

export {loginRoutes, registerRoutes, profileRoutes}