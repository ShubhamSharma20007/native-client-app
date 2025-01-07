const API_ROUTE = `${process.env.EXPO_PUBLIC_BACKEND_URL}/${process.env.EXPO_PUBLIC_API_PREFIX}/${process.env.EXPO_PUBLIC_API_VERSION}`



//  auth
const AUTH = 'auth'
export const REGISTER = `${API_ROUTE}/${AUTH}/register`;
export const LOGIN = `${API_ROUTE}/${AUTH}/login`;
export const FORGET_PASSWORD = `${API_ROUTE}/${AUTH}/forgot-password`
export const RESET_PASSWORD = `${API_ROUTE}/${AUTH}/reset-password`