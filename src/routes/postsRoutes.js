import express from "express";
import { listarPosts } from "../controllers/postsController.js";

 const routes = (app) => {
    // Habilita o parser JSON para o Express, permitindo que o servidor entenda requisições com corpo em formato JSON.
    app.use(express.json());
    // Rota GET para a URL "/posts".
    app.get("/posts",listarPosts );
}

export default routes;
