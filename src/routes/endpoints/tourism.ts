import {iroute} from '../../config/interfaces'
import response from '../../utils/response'
import {searchTourismController, tourism, tourismByCategoryController, tourismByIdController} from '../../controllers/tourism.controller'

const tourismRoute: iroute = {
    path: '/tourism',
    method: 'GET',
    config: {auth: "jwt"},
    handler: tourism
}

const searchTourism: iroute = {
    path: '/tourism/search',
    method: 'POST',
    config: {auth: "jwt"},
    handler: searchTourismController
}

const tourismByIdRoute: iroute = {
    path: '/tourism/{id}',
    method: 'GET',
    config: {auth: "jwt"},
    handler: tourismByIdController
}

const tourismByCategoryRoute: iroute = {
    path: '/tourism/category/{id}',
    method: 'GET',
    config: {auth: "jwt"},
    handler: tourismByCategoryController
}
export {tourismRoute, tourismByIdRoute, tourismByCategoryRoute, searchTourism}
