import React from "react";
import '../css/Item.css';
import {Link} from 'react-router-dom';

const Item = ({ producto }) => {
  const { name, price, img, id } = producto;

  return (
    <div className="card">
      <img src={img} alt={name} className="card-img" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>${price}</p>
        <Link to={'/item/'+id} className="compra">Ver más</Link>
      </div>
    </div>
  );
};

export default Item;
