import indexRoute from './endpoints'
import {loginRoutes, registerRoutes} from "./endpoints/auth"
import {tourismRoute, tourismByIdRoute, searchTourism} from './endpoints/tourism'

export default [].concat(
    indexRoute,
    loginRoutes,
    registerRoutes,
    searchTourism,
    tourismRoute,
    tourismByIdRoute
)