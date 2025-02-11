/**
 * Gallery Page
 */

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import '../css/gallery.css';

// ************************ Gallery images 
// jas posters
const jasPosters = [
  { src: require('../imgs/v.png'), caption: 'V' },
  { src: require('../imgs/vampire.png'), caption: 'Vampire' },
  { src: require('../imgs/omniscientreaderposter.png'), caption: 'Omniscient Readers Viewpoint' },
  { src: require('../imgs/csm.png'), caption: 'Chainsaw Man' },
  { src: require('../imgs/animation.png'), caption: 'Animation Sample' },
  { src: require('../imgs/ekko.png'), caption: 'Ekko' },
  { src: require('../imgs/link.png'), caption: 'Link Legend of Zelda' },
  { src: require('../imgs/polaroid.png'), caption: 'Polaroid' },
  { src: require('../imgs/portrait.png'), caption: 'Portrait' },
  { src: require('../imgs/shoots.png'), caption: 'Shooting' },
  { src: require('../imgs/Untitled.png'), caption: 'Original Art' },
  { src: require('../imgs/woah.png'), caption: 'Original Art 2' },
];

// Jas stickers
const jasStickers = [
  { src: require('../imgs/biyuu.png'), caption: 'Biyuu' },
  { src: require('../imgs/cat.png'), caption: 'Cat' },
  { src: require('../imgs/chillchuck.png'), caption: 'Chilchuk Dungeon Meshi' },
  { src: require('../imgs/marcille.png'), caption: 'Marcille Dungeon Meshi' },
  { src: require('../imgs/senshi.png'), caption: 'Senshi Dungeon Meshi' },
  { src: require('../imgs/korok.png'), caption: 'Korok and Aranara' },
  { src: require('../imgs/mancat.png'), caption: 'Mancat' },
  { src: require('../imgs/noface.png'), caption: 'No Face' },
]

// Sophie posters
const sopPosters = [
  { src: require('../imgs/02022023.jpg'), caption: 'Couple' },
  { src: require('../imgs/nilou dance.png'), caption: 'Nilou Genshin Dance' },
  { src: require('../imgs/plein april 2023 day 2.jpg'), caption: 'Plein April 2023 Day 2' },
  { src: require('../imgs/aaron.jpg'), caption: 'Aaron' },
  { src: require('../imgs/em.jpg'), caption: 'Em' },
  { src: require('../imgs/xiao full.png'), caption: 'Xiao Genshin' },
  { src: require('../imgs/tighnari 2.png'), caption: 'Tighnari Genshin' },
  { src: require('../imgs/firsttry.jpg'), caption: 'Self-Portrait' },
  { src: require('../imgs/xingqiu window clear water.png'), caption: 'Xingqiu Genshin' },
  { src: require('../imgs/scaramouche.png'), caption: 'Scaramouche Genshin' },
  { src: require('../imgs/inumaki.png'), caption: 'Inumaki Jujitsu Kaisen' },
  { src: require('../imgs/link2.png'), caption: 'Link Legend of Zelda' },
  { src: require('../imgs/gojo.png'), caption: 'Gojo Jujitsu Kaisen' },
]

// Sophie stickers
const sopStickers = [
  { src: require('../imgs/oikawaaa.png'), caption: 'Oikawa' },
  { src: require('../imgs/scara.png'), caption: 'Scaramouche' },
  { src: require('../imgs/tired.png'), caption: 'Tired Cat' },
  { src: require('../imgs/coffee.png'), caption: 'Coffee Cat' },
  { src: require('../imgs/hero.png'), caption: 'Hero' },
  { src: require('../imgs/magikarp.png'), caption: 'Magikarp' },
]

// Osi posters and stickers
const osi = [
  { src: require('../imgs/Untitled_Artwork_5.png'), caption: 'Miku' },
  { src: require('../imgs/Untitled_Artwork_6.png'), caption: 'Plate' },
  { src: require('../imgs/farline.png'), caption: 'Falin' },
  { src: require('../imgs/Untitled_Artwork_7.png'), caption: 'Original Art 1' },
  { src: require('../imgs/Untitled_Artwork_8.png'), caption: 'Spiderman' },
  { src: require('../imgs/Untitled_Artwork_9.png'), caption: 'Original Art 2' },
  { src: require('../imgs/Untitled_Artwork_10.png'), caption: 'Original Art 3' },
  { src: require('../imgs/Untitled_Artwork_12.png'), caption: 'Original Art 4' },
  { src: require('../imgs/Untitled_Artwork_3.png'), caption: 'Stickers' },
  { src: require('../imgs/Untitled_Artwork_2.png'), caption: 'Original Art 5' },
  { src: require('../imgs/Untitled_Artwork.png'), caption: 'Original Art 6' },
  { src: require('../imgs/cat2.png'), caption: 'Izutsumi Sticker' },
]

// Photo Gallery Component
const PhotoGallery = () => {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentGallery, setCurrentGallery] = React.useState('');

  // Handle image click to open lightbox and set the correct gallery image to display
  const handleImageClick = (gallery, index) => {
    setCurrentGallery(gallery);
    setCurrentIndex(index);
    setOpen(true);
  };

  // Get the correct image object
  const getGalleryImages = (gallery) => {
    switch (gallery) {
      case 'jasPosters':
        return jasPosters;
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
      {/* Jas */}
      <h1>klip</h1>

      <h2>Posters</h2>
      <div className="gallery">
        {jasPosters.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick('jasPosters', index)}>
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

      {/* Sophie */}
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

      {/* Osi */}
      <h1>Guest: osi</h1>
      <h2>Posters</h2>
      <div className="gallery">
        {osi.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick('osi', index)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
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