import indexRoute from './endpoints'
import {loginRoutes, profileRoutes, registerRoutes} from "./endpoints/auth"
import {tourismRoute, tourismByIdRoute, searchTourism, tourismRatingRoute} from './endpoints/tourism'

export default [].concat(
    indexRoute,
    loginRoutes,
    registerRoutes,
    profileRoutes,
    searchTourism,
    tourismRoute,
    tourismRatingRoute,
    tourismByIdRoute,
    
)