import userService from "../services/users.services.js";

const getAllUsers = (req, res) => {
  const users = userService.getAllUsers(); 
  res.status(200).json(users);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  try {
    if (!name || !email) {
      return res
        .status(400)
        .json({ message: "Todos lo campos son requeridos" });
    }
    const newUser = userService.createUser({ name, email });

    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

//viene del router para trabajarse y vuelve como variable al exportar
/* (req, res) => {
    res.status(200).json({message:"Usuario actualizado con éxito"})
} */

const updateUser = (req, res) => {
  const { id } = req.params;  //desestructuramos
  const { name } = req.body;  
  try {
    if (!id) {
      return res
      .status(400)
      .json({ message: "El ID es requerido" });
    }
    //servicio que hace el update
    //

    const user = userService.updateUser(id, name); //updateUser null || 
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res
      .status(200)
      .json({ message: "Usuario actualizado con exito", user: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const getUserById = (req, res) => {
  const { id } = req.params;
  try {
    const user = userService.getUserById(id);
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({ payload: user }); //por convencion payload parte util de la respuesta
  } catch (error) {
    res
    .status(500)
    .json({ message: "Error interno del servidor", error: error.message });
  }
};

export default { getAllUsers, createUser, updateUser ,getUserById};
 