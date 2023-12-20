import { Server } from "@hapi/hapi";
import { iplugin } from "../config/interfaces";
import hapiAuthJwt2 from "hapi-auth-jwt2";

const plugin: iplugin = {
    name: "jwt",
    register: function (server: Server, options: any): void {
        server.register(hapiAuthJwt2)
        server.auth.strategy("jwt", "jwt", {
            key: "cobajwt",
            validate: async function (decoded, request, h) {
                return {isValid: true}
            },
            verifyOptions: {ignoreExpiration: true}
        })
        server.auth.default("jwt")
    }
}

export default plugin