import React, { Component } from 'react';

//COMPONENTES
import Header from './Components/Header';
import ListaNoticias from './Components/ListaNoticias';
import Formulario from './Components/Formulario';

class App extends Component{
  
  state = {
    noticias: []
   }

  componentDidMount(){
    this.consultarNoticias()
  }

  consultarNoticias = async () => {
    const api = `https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=f42f7a322eb64ae6b0c8b3eaddcbcf31`;

    const respuesta = await fetch(api);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }

  render(){
    return(
      <div className="grey lighten-5">
        <Header
          titulo="Noticias React API"
        />
        <div className="container">
          <Formulario/>

          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </div>
    )
  }
}

export default App;
