export const GET = 'GET'
export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const UPDATE = 'UPDATE'

export const GETItem = (data) => ({type : GET, payload: data});
export const ADDItem = (item) => ({type : ADD, payload: item});
export const UPDATEItem = (item) => ({type : UPDATE, payload: item});
export const DELETEItem = (id) => ({type : DELETE, payload: id});