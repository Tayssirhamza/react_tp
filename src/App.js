import React from "react";

/*function App() {
  // ex1:
  const nom = "Tayssir";
  const ville = "Monastir";

  const dateActuelle = new Date().toLocaleDateString();
  const heureActuelle = new Date().toLocaleTimeString();
  //ex2: 
  const a=12;
  const b=2;

  return (
    <div>
      <h1 style={{ color: "black", fontWeight: "bold" }}>
        Bonjour {nom} </h1>
      <p style={{ color: "blue", fontWeight: "bold" }}>Ville : {ville}</p>
      <p style={{ color: "blue", fontWeight: "bold" }}>Date actuelle : {dateActuelle}</p>
      <p style={{ color: "blue", fontWeight: "bold" }}>Heure actuelle : {heureActuelle}</p>
      
      <hr/>

      <h2>Calculer:</h2>
      <p>Somme:{a+b}</p>
      <p>Difference:{a-b}</p>
      <p>Produit:{a*b}</p>

    </div>
  );
  
}*/

//tp2:

import './App.css';

import Catalogue from "./Components/Catalogue";
import Produit from "./Components/Produit";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App(){

  return(
    <div className="App" style={{textAlign:"center"}}>
      <Header />

      <h1>Catalogue de Produits:</h1>
      <Catalogue/>
      <Footer />
      
      
    </div>
  );
}

export default App;
