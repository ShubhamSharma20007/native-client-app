import { Platform } from "react-native";
let DEV_BACKEND_URL = Platform.OS === 'web' ? 'http://localhost:5000' : 'http://192.168.7.123:5000'
// process.env.EXPO_PUBLIC_BACKEND_URL
const API_ROUTE = `${DEV_BACKEND_URL}/${process.env.EXPO_PUBLIC_API_PREFIX}/${process.env.EXPO_PUBLIC_API_VERSION}`


//  auth
const AUTH = 'auth'
export const REGISTER = `${API_ROUTE}/${AUTH}/register`;
export const LOGIN = `${API_ROUTE}/${AUTH}/login`;
console.log(LOGIN)
export const FORGET_PASSWORD = `${API_ROUTE}/${AUTH}/forgot-password`
export const RESET_PASSWORD = `${API_ROUTE}/${AUTH}/reset-password`


//  heads
const Heads = 'heads'
export const CREATE_HEADS = `${API_ROUTE}/${Heads}/`;
export const GET_HEADS = `${API_ROUTE}/${Heads}/`;