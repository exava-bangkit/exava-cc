import {iroute} from '../../config/interfaces'
import response from '../../utils/response'
import indexController from '../../controllers/index.controller'

const route: iroute = {
    path: '/',
    method: 'GET',
    config: {auth: false},
    handler: indexController
}

export default route