import React from "react";

const Produit =({nom,prix,description,image})=>{
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
              <button className="btn btn-success mt-auto">
                  Ajouter au panier
              </button>
            </div>
        </div>                   
    </div>
    );
};

export default Produit;