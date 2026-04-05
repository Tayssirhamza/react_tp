import React from "react";

const Produit =({nom,prix,description,image,categorie})=>{

         const handleAddToCart = () => {
    alert("Produit ajouté au panier"); 
  };
   const getBadgeColor = (categorie) => {
    switch (categorie) {
      case "Informatique": return "blue";
      case "Téléphonie": return "green";
      case "Audio": return "purple";
      case "Accessoires": return "red";
      default: return "gray";
    }
  };

    return(
        <div className="col-md-4 mb-4">
<div className="card h-100 dhadow-sm d-flex align-items-center">
    <img 
       src={image}
       className="card-img-top"
       alt={nom} 
       style={{height:"200px",width:"auto",objectFit:"cover"}}
    />
            <div className="card-body d-flex flex-column">
              <h5 className="card-titre">{nom}</h5>
              <p className="card-text">{description}</p>
              <p className="fw-bold text-primary">{prix} dt</p>
              <button  onClick={handleAddToCart} className="btn btn-success mt-auto" >
                  Ajouter au panier
              </button>
               <span
                  className="badge"
                  style={{
                   backgroundColor: getBadgeColor(categorie),
                   color: "white",
                   padding: "3px 8px",
                   borderRadius: "12px",
                   position: "absolute",
                   top: "10px",
                   left: "10px",
                   fontSize: "0.8rem",
                   minWidth: "fit-content"
                 
                  }}
                >
                {categorie}
            </span>
            </div>
        </div>                   
    </div>
    );
};

export default Produit;