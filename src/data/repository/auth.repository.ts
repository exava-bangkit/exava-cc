import { OkPacket, ResultSetHeader } from 'mysql2';
import connection from '../database'
import { User } from "../model/user.model";
import Tourism from '../model/tourism.model';
import bcrypt from 'bcrypt'

export interface RegisterBody {
    username: string;
    email: string;
    password: string
}

export interface LoginBody {
    email: string;
    password: string
}

export interface GetUserByIdBody {
    id: number;
}

export default class AuthRepository {
    register = (payload: RegisterBody): Promise<User> => {
        let hash = bcrypt.hashSync(payload.password, 10)
        let today = new Date()
        let dateString = today.toISOString().slice(0, 10)
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>("INSERT INTO exava.user (username, email, password, nama, Location, Age) VALUES(?, ?, ?, ?, ?)", [payload.username, payload.email, "Lorem Ipsum", "Jakarta Selatan, DKI Jakarta", 23], (err, res) => {
                if (err) reject(err)
                else this.getUserById({id: res.insertId} as GetUserByIdBody)
                    .then((item) => resolve(item))
                    .catch(reject)
            })
        })
    }
    login = (payload: LoginBody): Promise<User> => {
        return new Promise((resolve, reject) => {
            connection.query<User[]>("SELECT * FROM exava.user WHERE email = ?", [payload.email], (err, res) => {
                if (err) reject(err)
                else {
                    let user = res?.[0]
                    if (user != undefined) {
                        if(bcrypt.compareSync(payload.password, user.password)) {
                            resolve(user)
                        } else {
                            reject(Error("Login gagal!"))
                        }
                    } else {
                        reject(Error("User not found"))
                    }
                }
            })
        })
    }
    getUserById = (payload: GetUserByIdBody): Promise<User> => {
        return new Promise((resolve, reject) => {
            connection.query<User[]>("SELECT * FROM user WHERE user_Id = ?", [payload.id], (err, res) => {
                if(err) reject(err)
                else resolve(res?.[0])
            })
        })
    }   
}