import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
routes(app)

// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => {
    console.log("Servidor Escutando...");
});