import {Request, ResponseToolkit} from '@hapi/hapi'
import response from '../utils/response'
import { Boom } from '@hapi/boom'
import Podium from '@hapi/podium'
import JWT from "jsonwebtoken"
import AuthRepository, { GetUserByIdBody, LoginBody, RegisterBody } from '../data/repository/auth.repository'

interface UserInterface {
    id: number;
    username: string;
    email: string;
    password: string;

}

interface UserInput {
    username: string;
    email: string;
    password: string;
}

interface UserLogin {
    email: string;
    password: string;
}

class User implements UserInterface {
    id: number;
    username: string;
    email: string;
    password: string;

    constructor(username: string, password: string, email: string) {
        this.id = users.length + 1
        this.username = username
        this.email = email,
        this.password = password
    }

}

var users: User[] = []

const loginController  = async (request: Request, h: ResponseToolkit): Promise<any> => {

    let repository = new AuthRepository()

    let loginInput = <LoginBody>request.payload

    try {
        let login = await repository.login(loginInput)
        let payload = {id: login.user_Id, email: login.email}
        let jwtValue = JWT.sign(payload, "cobajwt")
        return h.response({"message": "success", "token": jwtValue})
    } catch (error) {
        return h.response({"message": error}).code(400)
    }

    

    let userLogin = <UserLogin>request.payload

    let user: User | undefined = users.find((item) => item.email == userLogin.email)

    if (user != undefined) {
        let payload = {id: user.id, email: user.email}
        let jwtValue = JWT.sign(payload, "cobajwt")
        return h.response({"message": "success", "token": jwtValue})
    } else {
        return h.response({"message": "error"}).code(400)
    }

    

    

}

const registerController  = async (request: Request, h: ResponseToolkit): Promise<any> => {

    let repository = new AuthRepository()

    let registerInput = <RegisterBody>request.payload

    try {
        let register = await repository.register(registerInput)
        return h.response({"message": "success", "data": {"username": register.username, "email": register.email}})
    } catch (error) {
        return h.response({"message": error}).code(400)
    }

    let input = <UserInput>request.payload

    let user = new User(input.username, input.password, input.email)

    users.push(user)

    users.forEach((userItem) => console.log(userItem))

    return h.response({"message": "success", "data": user})

}

const profileController = async (request: Request, h: ResponseToolkit): Promise<any> => {
    let repository = new AuthRepository()
    let auth = request.auth.credentials as any
    let value = await repository.getUserById({id: auth.id})
    console.log(value, auth)
    if (value != undefined) {
        return h.response({"message": "success", "data": {
            id: value.user_Id,
            username: value.username,
            email: value.email,
        }})

    } else {
        return h.response({"message": "error", "data": "user not found"})
    }

    
}

export {loginController, registerController, profileController}