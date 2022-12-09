
import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const isPresentInFavs = () => {
    const favs = JSON.parse(localStorage.getItem("favs"));
    if (favs !== null) {
      return favs.some((fav) => fav.id === id);
    }
    return false;
  };
  
  const addFav = ()=>{

    let favs = localStorage.getItem("favs");
    if(favs === null){
      favs = [];
    }else{
      favs = JSON.parse(favs);
    }
    favs.push({name, username, id});
    localStorage.setItem("favs", JSON.stringify(favs));
  }

  return (
    <div className="card">
      <Outlet />

        <h3>{name}</h3>
        <p>{username}</p>
        <p>{id}</p>
        
        <Link to={`/dentist/${id}`}>Ver mas</Link>

        <button onClick={()=>{
          addFavos()
          setActive(!active)}}
          className={`favButton ${active ? "active": ""}`} id={theme.theme}> Add Fav
        </button>
    </div>
  );
};

export default Card;

