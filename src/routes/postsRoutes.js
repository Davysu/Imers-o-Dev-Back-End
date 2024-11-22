import express from "express"; // Importa o framework Express para criar a aplicação web
import multer from "multer"; // Importa o middleware Multer para lidar com o upload de arquivos
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js"; // Importa as funções controladoras para lidar com as requisições relacionadas a posts

// Configura o armazenamento para o Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o diretório de destino para os arquivos upados
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Define o nome do arquivo, mantendo o nome original
    cb(null, file.originalname);
  }
});

// Cria uma instância do Multer com a configuração de armazenamento definida
const upload = multer({ dest: "./uploads", storage });

// Define as rotas da aplicação
const routes = (app) => {
  // Habilita o parser JSON para o Express, permitindo que o servidor entenda requisições com corpo em formato JSON
  app.use(express.json());

  // Rota GET para listar todos os posts
  app.get("/posts", listarPosts);

  // Rota POST para criar um novo post
  app.post("/posts", postarNovoPost);

  // Rota POST para fazer upload de uma imagem
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes; // Exporta a função de rotas para ser utilizada em outros módulos