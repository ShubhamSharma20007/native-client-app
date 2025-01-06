const API_ROUTE = `${process.env.EXPO_PUBLIC_BACKEND_URL}/${process.env.EXPO_PUBLIC_API_PREFIX}/${process.env.EXPO_PUBLIC_API_VERSION}`



//  auth
const AUTH = 'auth'
export const REGISTER = `${API_ROUTE}/${AUTH}/register`;