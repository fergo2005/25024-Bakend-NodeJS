import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

// settings
const app = express();

// midddleware nativo de express sino da indefined
app.use(express.json());



//app.use(cors());  //midelware
 //luego agrego lo siguiente y queda...
const corsOptions = {   //para agregar los servidores de los que acepta solicitudes
  origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"],
  methods: ["GET", "POST"],
};
app.use(cors(corsOptions));   // con esto solo admito esto que cofigure arriba
//app.use(cors()); // asi cors esta disponible para todos

// routes
app.use("/api/users", userRoutes);
/* app.get('/buscar-producto',(req,res)=>{  // este caso para aceptar uso desde el front(cors)(url) hacia la ruta

}) */

  // listener
app.listen(5000, () => console.log("servidor corriendo..."));
