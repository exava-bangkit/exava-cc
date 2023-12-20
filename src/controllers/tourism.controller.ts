import { ResponseToolkit, Request } from "@hapi/hapi"
import TourismRepository from "../data/repository/tourism.repository"
import Tourism from "../data/model/tourism.model"

const repository = new TourismRepository()

const tourismController  = async (request: Request, h: ResponseToolkit): Promise<any> => {

    let value = await repository.getAll()
    console.log(value[0].place_name)

    return h.response({"message": "success", "data": value})

}

export const tourism = tourismController

const tourismById = async (request: Request, h: ResponseToolkit): Promise<any> => {
    let id = request.params.id 
    let value = await repository.getById(parseInt(id))
    console.log(value)

    return h.response({"message": "success", "data": value})

}
export const tourismByIdController = tourismById