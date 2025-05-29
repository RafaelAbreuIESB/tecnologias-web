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
function BuscarPorID(id) {
  return axios
    .get(`${url}/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}
function adicionar(contato) {
  return axios
    .post(url, contato)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}
function modificar(id, contato) {
  return axios
    .put(`${url}/${id}`, contato)
    .then((response) => {
        return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
        return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}
function remover(id){
    return axios.delete(`${url}/${id}`)
.then((response) => {
    return { sucesso: true, dados: response.data };
})
.catch((error) => {
    return { sucesso: false, mensagem: "Ocorreu um erro!" };
});
}

export { buscarTodos, buscarPorId, adicionar, modificar, remover };