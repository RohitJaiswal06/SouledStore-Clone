import React from 'react'

function Collection() {
  return (
    <div>
      <h1 style={{textAlign:"center", paddingTop:"2%"}}>
        COLLECTIONS
      </h1>
      <div style={{display:"flex", flexWrap:"nowrap", justifyContent:"space-evenly"}}>
        <div style={{padding:"20px 5px 20px 20px"}}>
            <img style={{height:"458px"}} src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_Oversized-t-shirt_cm8t9sq.jpg?format=webp&w=480&dpr=1.3'></img>
        </div>
        <div style={{padding:"20px 20px 20px 20px"}}>
            <img style={{height:"458px"}} src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Colllection-Tiles_ANzcnWu.jpg?format=webp&w=480&dpr=1.3'></img>
        </div>
        <div style={{padding:"20px 20px 20px 5px"}}>
            <img style={{height:"458px"}} src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Mens-Innerwear-Collection-Tiles-App-1.jpg?format=webp&w=480&dpr=1.3'></img>
        </div>
      </div>
    </div>
  )
}

export default Collection
