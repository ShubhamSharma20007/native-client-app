import { Platform } from "react-native";
let DEV_BACKEND_URL = Platform.OS === 'web' ? 'http://localhost:5000' : 'http://192.168.1.38:5000'
//  PRODUCATION = 'https://rojmel.onrender.com'
let PRODUCTION = 'https://rojmel.onrender.com'
// process.env.EXPO_PUBLIC_BACKEND_URL
const PATH = process.env.NODE_ENV === "development" ? DEV_BACKEND_URL : PRODUCTION

const API_ROUTE = `${PATH}/${process.env.EXPO_PUBLIC_API_PREFIX}/${process.env.EXPO_PUBLIC_API_VERSION}`


//  auth
const AUTH = 'auth'
export const REGISTER = `${API_ROUTE}/${AUTH}/register`;
export const LOGIN = `${API_ROUTE}/${AUTH}/login`;

export const FORGET_PASSWORD = `${API_ROUTE}/${AUTH}/forgot-password`
export const RESET_PASSWORD = `${API_ROUTE}/${AUTH}/reset-password`


//  heads
const Heads = 'heads'
export const CREATE_HEADS = `${API_ROUTE}/${Heads}/`;
export const GET_HEADS = `${API_ROUTE}/${Heads}/`;
export const UPDATE_HEADS = `${API_ROUTE}/${Heads}/`; //:id
export const DELETE_HEAD = `${API_ROUTE}/${Heads}/`; //:id