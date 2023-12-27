import { resolve } from "path";
import connection from "../database"
import Tourism from "../model/tourism.model";

export default class TourismRepository {
    getAll = (): Promise<Tourism[]>  => {
        return new Promise((resolve, reject) => {
            connection.query<Tourism[]>("SELECT * FROM tourism_with_id", (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }
    getById = (id: number ): Promise<Tourism> => {
        return new Promise((resolve, reject) => {
            connection.query<Tourism[]>("SELECT * FROM tourism_with_id WHERE Place_Id = ?", [id], (err, res) => {
                if (err) reject(err);
                else resolve(res?.[0]);
            })
        })
    }
    search = (query: string): Promise<Tourism[]> => {
        return new Promise((resolve, reject) => {
            connection.query<Tourism[]>("SELECT * FROM tourism_with_id WHERE Place_Name = ?", ['%' + query + '%'], (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }
}