import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
}); 

export const login = async (userData: {username:string; password:string}) => {
  try {
    const response = await api.post('/v1/login', userData);
    console.log(response)
    return {"result":"success", "data":response.data};
  } catch (error) {  
    return {"result":"failed"}; 
  }
};

export const createUser = async (userData: { username: string; password: string }) => {
  const response = await api.post('/v1/create-user', userData);
  return response.data;
};
