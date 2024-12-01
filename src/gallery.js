import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './gallery.css'; // Import CSS for styling
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

// Sample data (image URLs and captions)
const images = [
  { src: require('./imgs/v.png'), caption: 'Image 1' },
  { src: require('./imgs/vampire.png'), caption: 'Image 2' },
  { src: require('./imgs/omniscientreaderposter.png'), caption: 'Image 3' },
  { src: require('./imgs/csm.png'), caption: 'Image 4' },
  { src: require('./imgs/animation.png'), caption: 'Image 5' },
  { src: require('./imgs/ekko.png'), caption: 'Image 5' },
  { src: require('./imgs/link.png'), caption: 'Image 5' },
  { src: require('./imgs/polaroid.png'), caption: 'Image 5' },
  { src: require('./imgs/portrait.png'), caption: 'Image 5' },
  { src: require('./imgs/shoots.png'), caption: 'Image 5' },
  { src: require('./imgs/Untitled.png'), caption: 'Image 5' },
  { src: require('./imgs/woah.png'), caption: 'Image 5' },
];

const jasStickers = [
  { src: require('./imgs/biyuu.png'), caption: 'Image 6' },
  { src: require('./imgs/cat.png'), caption: 'Image 6' },
  { src: require('./imgs/chillchuck.png'), caption: 'Image 6' },
  { src: require('./imgs/marcille.png'), caption: 'Image 6' },
  { src: require('./imgs/senshi.png'), caption: 'Image 6' },
  { src: require('./imgs/korok.png'), caption: 'Image 6' },
  { src: require('./imgs/mancat.png'), caption: 'Image 6' },
  { src: require('./imgs/noface.png'), caption: 'Image 6' },
]

const sopPosters = [
  { src: require('./imgs/02022023.jpg'), caption: 'Image 6' },
  { src: require('./imgs/nilou dance.png'), caption: 'Image 6' },
  { src: require('./imgs/plein april 2023 day 2.jpg'), caption: 'Image 6' },
  { src: require('./imgs/aaron.jpg'), caption: 'Image 6' },
  { src: require('./imgs/em.jpg'), caption: 'Image 6' },
  { src: require('./imgs/xiao full.png'), caption: 'Image 6' },
  { src: require('./imgs/tighnari 2.png'), caption: 'Image 6' },
  { src: require('./imgs/firsttry.jpg'), caption: 'Image 6' },
  { src: require('./imgs/xingqiu window clear water.png'), caption: 'Image 6' },
  { src: require('./imgs/scaramouche.png'), caption: 'Image 6' },
  { src: require('./imgs/inumaki.png'), caption: 'Image 6' },
  { src: require('./imgs/link2.png'), caption: 'Image 6' },
  { src: require('./imgs/gojo.png'), caption: 'Image 6' },
]

const sopStickers = [
  { src: require('./imgs/oikawaaa.png'), caption: 'Image 6' },
  { src: require('./imgs/scara.png'), caption: 'Image 6' },
  { src: require('./imgs/tired.png'), caption: 'Image 6' },
  { src: require('./imgs/coffee.png'), caption: 'Image 6' },
  { src: require('./imgs/hero.png'), caption: 'Image 6' },
  { src: require('./imgs/magikarp.png'), caption: 'Image 6' },
]

const osi = [
  { src: require('./imgs/Untitled_Artwork_5.png'), caption: 'Image 6' },
  { src: require('./imgs/Untitled_Artwork_6.png'), caption: 'Image 6' },
  { src: require('./imgs/farline.png'), caption: 'Image 6' },
  { src: require('./imgs/Untitled_Artwork_7.png'), caption: 'Image 6' },
  { src: require('./imgs/Untitled_Artwork_8.png'), caption: 'Image 6' },
  { src: require('./imgs/Untitled_Artwork_9.png'), caption: 'Image 6' },
  { src: require('./imgs/Untitled_Artwork_10.png'), caption: 'Image 6' },
  { src: require('./imgs/Untitled_Artwork_12.png'), caption: 'Image 6' },
  { src: require('./imgs/Untitled_Artwork_3.png'), caption: 'Image 6' },
  { src: require('./imgs/Untitled_Artwork_2.png'), caption: 'Image 6' },
  { src: require('./imgs/Untitled_Artwork.png'), caption: 'Image 6' },
  { src: require('./imgs/cat2.png'), caption: 'Image 6' },
]

const PhotoGallery = () => {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentGallery, setCurrentGallery] = React.useState('');

  // Handle image click to open lightbox and set the correct gallery
  const handleImageClick = (gallery, index) => {
    setCurrentGallery(gallery);
    setCurrentIndex(index);
    setOpen(true);
  };

  const getGalleryImages = (gallery) => {
    switch (gallery) {
      case 'images':
        return images;
      case 'jasStickers':
        return jasStickers;
      case 'sopPosters':
        return sopPosters;
      case 'sopStickers':
        return sopStickers;
      case 'osi':
        return osi;
      default:
        return [];
    }
  };

  return (
    <>
      <h1>klip</h1>

      <h2>Posters</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick('images', index)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      <h2>Stickers</h2>
      <div className="gallery">
        {jasStickers.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick('jasStickers', index)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      <h1>Sora</h1>
      <h2>Posters</h2>
      <div className="gallery">
        {sopPosters.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick('sopPosters', index)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      <h2>Stickers</h2>
      <div className="gallery">
        {sopStickers.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick('sopStickers', index)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      <h1>Guest: osi</h1>
      <h2>Posters</h2>
      <div className="gallery">
        {osi.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick('osi', index)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={getGalleryImages(currentGallery).map((image) => ({
          src: image.src,
          alt: image.caption,
          width: 3840, // Adjust based on actual image size
          height: 2560, // Adjust based on actual image size
        }))}
      />
    </>
  );
};

export default PhotoGallery;