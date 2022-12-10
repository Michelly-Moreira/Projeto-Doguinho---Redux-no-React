import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDogImage } from './redux/actions';
import './style.css';

class App extends Component{
  render(){
    const {
      isFetching,
      imageURL,
      dispatch
    } = this.props;

    if (isFetching) return <p>Carregando...</p>
  console.log(this.props);
  return (
   <div>
    <button
    onClick={() => {dispatch(fetchDogImage());
    }}
    type='button'
    >
      Novo Doguinho
    </button>
    {
      imageURL &&(
      <img
      src={ imageURL }
      alt='Imagem de um cachorro aleatório'
      />
      )}
   </div>
);
}
}

const mapStateToProps = (state) => ({
  imageURL: state.imageURL, 
  isFetching: state.isFetching,
})
//neste caso não posso usar spread operator dentro do mapStateToProps porque não usei o combine reducer no reducer, senão ele me trará string por string ao invés do resultado esperado.
export default connect(mapStateToProps)(App);
