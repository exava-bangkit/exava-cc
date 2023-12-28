import {iroute} from '../../config/interfaces'
import response from '../../utils/response'
import {searchTourismController, tourism, tourismByCategoryController, tourismByIdController, tourismRatingController} from '../../controllers/tourism.controller'

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

const tourismRatingRoute: iroute = {
    path: '/tourism/{id}/rating',
    method: 'GET',
    config: {auth: "jwt"},
    handler: tourismRatingController
}
export {tourismRoute, tourismByIdRoute, tourismByCategoryRoute, searchTourism, tourismRatingRoute}
