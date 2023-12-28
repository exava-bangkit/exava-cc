import { RowDataPacket } from "mysql2";

interface UserInterface extends RowDataPacket {
    user_Id: number;
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

export class User implements UserInterface {
    user_Id: number;
    username: string;
    email: string;
    password: string;

    constructor(user_Id: number, username: string, password: string, email: string) {
        this.user_Id = user_Id
        this.username = username
        this.email = email
        this.password = password
    }
    [column: number]: any;
    [column: string]: any;
    ["constructor"]: { name: "RowDataPacket"; };

}