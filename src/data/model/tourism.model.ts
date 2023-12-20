import { RowDataPacket } from "mysql2";

export default interface Tourism extends RowDataPacket {
    place_id?: number;
    place_name: string;
    description: string;
    id_category: number;
    id_city: number;
    price: number;
    rating: number;
}