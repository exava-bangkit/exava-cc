import { RowDataPacket } from "mysql2";

interface UserInterface extends RowDataPacket {
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

export class User implements UserInterface {
    id: number;
    username: string;
    email: string;
    password: string;

    constructor(id: number, username: string, password: string, email: string) {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
    }
    [column: number]: any;
    [column: string]: any;
    ["constructor"]: { name: "RowDataPacket"; };

}