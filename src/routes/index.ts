import indexRoute from './endpoints'
import {loginRoutes, registerRoutes} from "./endpoints/auth"
import {tourismRoute, tourismByIdRoute} from './endpoints/tourism'

export default [].concat(
    indexRoute,
    loginRoutes,
    registerRoutes,
    tourismRoute,
    tourismByIdRoute
)