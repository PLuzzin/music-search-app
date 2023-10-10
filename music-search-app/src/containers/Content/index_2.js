import React, { useState } from 'react';

import './content.css';

import { GoHeart, GoHeartFill } from 'react-icons/go';

function Content({items, search}) {
  // const [iconFav, setIconFav] = useState(GoHeart);
  const [iconFav, setIconFav] = useState(false);
  const [addFavourites, setAddFavourites] = useState([]);

  
  const hadleFavourites = (fav_id) => {

    // get object that was clicked
    items.map((item) => {
      if(item.id === fav_id){
        // add obj selected to addFavourites array
        setAddFavourites([...addFavourites, {id:item.id, name:item.name, email:item.email, gender:item.gender, status:item.status}]);
      }
  
    });

    console.log(addFavourites);

    // items.map((item) => {
    //   if(item.id === fav_id){
    //     setAddFavourites((favSelected) => {
    //       // se fav_id existe no array... remove it
    //       if(favSelected.includes(fav_id)){
    //         console.log('entrou');
    //         let newFavSelected = [...favSelected];
    //         return newFavSelected.filter(item => item !== fav_id)
    //       }
    //       // se fav_id nao existe... duplica array + add id
    //       return [...favSelected, {id:item.id, name:item.name, email:item.email, gender:item.gender, status:item.status}];
    //     });
        
    //   }
    //   // console.log(addFavourites);
        
    // });

    // inserir id do icon selected no array
    // setAddFavourites((favSelected) => {
    //   // se fav_id existe no array... remove it
    //   if(favSelected.includes(fav_id)){
    //     let newFavSelected = [...favSelected];
    //     return newFavSelected.filter(item => item !== fav_id)
    //   }
    //   // se fav_id nao existe... duplica array + add id
    //   // return [...favSelected, fav_id];
    //   return [...favSelected, {id:fav_id, }];
    // });

    // toggle icon true/false
    setIconFav(!iconFav);

    // change icon to full when selected
    // setIconFav(addFavourites.includes(fav_id) ? <GoHeartFill /> : <GoHeart /> )

    // console.log(addFavourites);
  }

  return (
    <>
      <div id="ContentList" className="card-wrapper">
        <div className="content-title-wrapper">
            <h4>Playlist</h4>
            <div id="resultCount" className="ms-4"></div>
        </div>

        <div className="grid-wrapper mt-3">
          {items.filter(item => item.name.includes(search)).map(filteredItem => (
            
              <div 
                id="gridResults" 
                key={filteredItem.id}
              >
                <div className="grid-item">
                  <div className="img-align">
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/100x100bb.jpg" alt="" />
                  </div>
                  <div className="title">
                    <span className="text-h1">{filteredItem.name}</span>
                    <span onClick={() => hadleFavourites(filteredItem.id)} className="heart-empty">
                      {iconFav ? <GoHeartFill /> : <GoHeart />}
                    </span>
                  </div>
                  <div className="description">
                    <span className="track-name">{filteredItem.email}</span>
                    <span>{filteredItem.gender}</span>
                    <span>{filteredItem.status}</span>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
        
        <div 
          id="gridNoResults" 
          className="show-gridNoResults mt-3"
          style={items.length > 0 ? { display: "flex" } : { diplay:"none" }}
        >
            <h5>What do you want to listen to?</h5>
            <p>Search by artist name, track name or collection name.</p>
        </div> 


        {/* <div 
          id="gridResults" 
          className="grid-wrapper mt-3"
          style={items.length <= 0 ? {display: "flex"}:{diplay:"none"}}
        >
          {items.map((item) => {
            return (
              <div key={item.id} className="grid-item">
                <div className="img-align">
                  <img src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/100x100bb.jpg" alt="" />
                </div>
                <div className="title">
                  <span className="text-h1">{item.name}</span>
                  <span className="heart-empty"></span>
                </div>
                <div className="description">
                  <span className="track-name">{item.email}</span>
                  <span>{item.gender}</span>
                  <span>{item.status}</span>
                </div>
              </div>
            );
          })}

          
        </div>  */}


      </div>
      
    </>
  );
}

export default Content;