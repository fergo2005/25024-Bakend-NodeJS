import { Router } from "express";
import userController from "../controllers/users.controller.js";
const router = Router();

// get
router.get("/", userController.getAllUsers);


router.get("/:id", userController.getUserById);

 
// post
router.post("/", userController.createUser);


//put   //creamos la ruta
/* router.put("/:id",(req, res) => { //pasar un parámetro a la url con :    
    res.status(200).json({message:"Usuario actualizado con éxito"})
} ); */
// y luego el (req,res) lo reemplazo por la variable que traigo del user.controller)
//entonces queda: porque al updateUser lo trabajamos en userControler. 
router.put("/:id", userController.updateUser);




export default router;
