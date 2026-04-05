// src/Components/Header.js
import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>TechStore</h1>
      <p>L'innovation digital au service de votre succes!</p>
    </header>
  );
};

// Style simple en ligne (optionnel)
const styles = {
  header: {
    color:"white",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "black",
    borderBottom: "2px solid #ccc",
  },
};

export default Header;