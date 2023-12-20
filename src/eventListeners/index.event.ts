import hapiAuthJwt2 from 'hapi-auth-jwt2'
import console from './console.event'
import jwt from './jwt.event'

export default [
    {
        plugin: console
    },
    {
        plugin: jwt
    }
]