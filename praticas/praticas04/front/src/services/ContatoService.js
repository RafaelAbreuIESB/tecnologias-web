import axios from "axios";
const url = import.meta.env.VITE_API_URL;
function BuscarTodos() {
  return axios
    .get(url)
    .then((response) => {
        return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
        return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}
function BuscarPorID(id){
    return axios.get(`${url}/${id}`)
    .then((response) => {
        return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
        return { sucesso: false, mensagem: "Ocorreu um erro!" };});
        
}
