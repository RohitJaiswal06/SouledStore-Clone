import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Merchandise() {
  return (
    <div>
      <h1 style={{textAlign:"center", paddingTop:"1%"}}>
        OFFICIAL MERCHANDISE
      </h1>
      <div style={{marginLeft:"3%"}}>
      <Carousel responsive={responsive}>
        <div>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Disnety_Logo_268x220_GevoL2M_2j5PP2v.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
        <div>
            <img src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/web-icon.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
        <div>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Marvel_Logo_268x220_b16y8nC_GKd3vRA.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
        <div>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/HarryPotter_Logo_268x220_LqBAKZU_Y8BG6uT.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
        <div>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/LooneyTunes_268x220_o3UJ8Y0_OPjL9nW.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
        <div>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/DC_Logo_268x220_qtYfouo_VyuqmVD.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
        <div>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/web-icon1.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
        <div>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/DC_Logo_268x220_qtYfouo_VyuqmVD_Pbz2nyW.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
        <div>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Rick_Morty_268x220_4283QPV.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
        <div>
            <img  src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/StarWars_268x220_sPJGI16_ODbjkHD.jpg?format=webp&w=300&dpr=1.3'></img>
        </div>
      </Carousel>
      </div>
    </div>
  )
}

export default Merchandise

