import React from 'react'

function TopSelling() {
  return (
    <div>
      <h1 style={{textAlign:"center", paddingTop:"2%"}}>
        TOP SELLING
      </h1>
      <div style={{display:"flex", flexWrap:"nowrap", justifyContent:"space-evenly"}}>
        <div style={{padding:"20px 5px 20px 20px"}}>
            <img style={{height:"458px"}} src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Top-Selling-tile-3_7DlQ8Fi.jpg?format=webp&w=360&dpr=1.3'></img>
            <div>
                <p>
                    <b>Rick & Morty: Escape From Reality</b><br/>
                    Oversized T-shirt<br/>
                    1199<br/>
                </p>
            </div>
        </div>
        <div style={{padding:"20px 20px 20px 20px"}}>
            <img style={{height:"458px"}} src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Top-Selling-Tile-Solids-Mid-Blue-Wash-Jeans_jkaz9wU.jpg?format=webp&w=360&dpr=1.3'></img>
            <div>
                <p>
                    <b>Solids: Mid Blue Wash (Straight Fit)</b><br/>
                    Men Jeans<br/>
                    2299<br/>
                </p>
            </div>
        </div>
        <div style={{padding:"20px 20px 20px 5px"}}>
            <img style={{height:"458px"}} src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Top-Selling-Tile-TSS-Originals-Beach-Vibes-Half-Sleeve-Shirt_5o80zj8.jpg?format=webp&w=360&dpr=1.3'></img>
            <div>
                <p>
                    <b>TSS Originals: Beach Vibes</b><br/>
                    Shirts<br/>
                    1099<br/>
                </p>
            </div>
        </div>
        <div style={{padding:"20px 20px 20px 5px"}}>
            <img style={{height:"458px"}} src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Top-Selling-Tile-Star-WarsDarth-Vader-T-Shirt_2coiH2k.jpg?format=webp&w=360&dpr=1.3'></img>
            <div>
                <p>
                    <b>Star Wars: Darth Vader</b><br/>
                    T-Shirts<br/>
                    699<br/>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopSelling
