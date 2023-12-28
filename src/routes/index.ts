import indexRoute from './endpoints'
import {loginRoutes, registerRoutes} from "./endpoints/auth"
import {tourismRoute, tourismByIdRoute, searchTourism, tourismRatingRoute} from './endpoints/tourism'

export default [].concat(
    indexRoute,
    loginRoutes,
    registerRoutes,
    searchTourism,
    tourismRoute,
    tourismRatingRoute,
    tourismByIdRoute,
    
)