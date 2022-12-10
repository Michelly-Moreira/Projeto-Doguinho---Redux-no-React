export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const requestStarted = () => {
  return{
    type: REQUEST_STARTED,
  };
}

export const requestSuccessful = (imageURL) => {
  return{
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

export const requestFailed = (error) => {
  return{
    type: REQUEST_FAILED,
    payload: error,
  };
}

export const fetchDogImage = () => {
  return (dispatch) => {
//muda o estado para carregando antes de começar a requisição
    dispatch(requestStarted());
//fazendo requisição e transformando a resposta em objeto
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    //.then(data  => console.log(data)) mostra o retorno da api, onde tenho acesso aos dados

//sucesso: quando a requisição é finalizada com a captura da informação
    .then(data => dispatch(requestSuccessful(data.message)))
//falha: quando o servidor não existe mais ou demora responder
    .catch((error) => dispatch(requestFailed(error)));
  }
}

/* 
export const fetchDogImage = () => {
  return async (dispatch) => {
    //muda o estado para carregando antes de começar a requisição
    dispatch(requestStarted());
try{
    //fazer a requisição
const imageURL = await fetch("https://dog.ceo/api/breeds/image/random")
    //sucesso: atualiza o estado com a resposta da api
dispatch(requestSuccessful(imageURL));
}catch(error){
    //falha: atualiza o estado com a mensagem de erro
dispatch(requestFailed())
}
  }
} */