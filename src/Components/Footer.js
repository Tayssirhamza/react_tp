// src/Components/Footer.js
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // année dynamique

  return (
    <footer style={styles.footer}>
      <p>&copy; {currentYear} TechStore</p>
    </footer>
  );
};

// Style simple
const styles = {
  footer: {
    color:"white",
    textAlign: "center",
    padding: "10px",
    backgroundColor:"black",
    borderTop: "2px solid #ccc",
    position: "fixed",
    width: "100%",
    bottom: 0,
  },
};

export default Footer;