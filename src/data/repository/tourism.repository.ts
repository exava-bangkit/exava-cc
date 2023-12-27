import { resolve } from "path";
import connection from "../database"
import Tourism from "../model/tourism.model";
import { promises } from "dns";

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
            connection.query<Tourism[]>("SELECT * FROM tourism_with_id WHERE LOWER(Place_Name) LIKE LOWER(?)", ['%' + query + '%'], (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }
    getByCategory = (id: number): Promise<Tourism> => {
        return new Promise((resolve, reject) => {
            connection.query<Tourism[]>("SELECT * FROM tourism_with_id WHERE Id_Category = ?", [id], (err, res) => {
                if (err) reject(err);
                else resolve(res?.[0]);
            })
        })
    }
}