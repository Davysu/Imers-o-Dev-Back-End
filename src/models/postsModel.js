import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados MongoDB usando a string de conexão fornecida como variável de ambiente.
// A função conectarAoBanco retorna uma promessa que será resolvida com a conexão ao banco de dados.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados.
export default async function getTodosPosts() {
    // Obtém o banco de dados "imersao-instabytes" da conexão.
    const db = conexao.db("imersao-instabytes");
    // Obtém a coleção "posts" do banco de dados.
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos na coleção e retorna os resultados como um array.
    return colecao.find().toArray();
}