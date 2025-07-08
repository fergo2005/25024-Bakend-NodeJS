// persistencia en memoria
import { User } from "../models/users.model.js";
const users = [];

const getAllUsers = () => {
  return users;
};


const getUserById = (id) => {
  return users.find((user) => user.id === id);
         
};

const createUser = (user) => {
  const newUser = new User(user.name, user.email);
  users.push(newUser);
  return newUser;
};

//recibe un ID y tambien un nombre por ejemplo
const updateUser = (id, name) => {
  //buscamos el usuario con el ID
  //const userFound = users.find((user) => user.id === id); // es igual a lo que retorna getUserById
  const userFound = getUserById(id); //devuelve el usuario o undefined
  if (!userFound) return null; //si no hay usuario undefined devuelve null
  userFound.name = name; // si hay usuario, a su atributo nombre lo modifico con lo que pase por parametro
  return userFound;
};



export default { getAllUsers, createUser, updateUser, getUserById};
