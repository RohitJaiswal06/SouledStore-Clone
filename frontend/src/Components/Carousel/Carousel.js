import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  width : '100%',
  height: '490px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Silder = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} autoplay>
      <div>
        <img style={contentStyle} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Hardik_23_Summer-collection_Homepage-Banner.jpg?format=webp&w=1500&dpr=1.3"></img>
      </div>
      <div>
        <img style={contentStyle} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/summer-shirt-banner-desktop_pmGthRB.jpg?format=webp&w=1500&dpr=1.3"></img>
      </div>
      <div>
        <img style={contentStyle} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_6kx7Ddf.jpg?format=webp&w=1500&dpr=1.3"></img>
      </div>
      <div>
        <img style={contentStyle} src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner-Just-Launched-.jpg?format=webp&w=1500&dpr=1.3"></img>
      </div>
    </Carousel>
  );
};
export default Silder;