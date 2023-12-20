import {iroute} from '../../config/interfaces'
import response from '../../utils/response'
import {tourism, tourismByIdController} from '../../controllers/tourism.controller'

const tourismRoute: iroute = {
    path: '/tourism',
    method: 'GET',
    config: {auth: "jwt"},
    handler: tourism
}

const tourismByIdRoute: iroute = {
    path: '/tourism/{id}',
    method: 'GET',
    config: {auth: "jwt"},
    handler: tourismByIdController
}
export {tourismRoute, tourismByIdRoute}