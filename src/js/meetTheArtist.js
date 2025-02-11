/**
 * Meet the Artist Page
 */

import React from 'react';
import '../css/meetTheArtist.css';

// Subtext image for Where to Find Us
const subTextImageSrc = require("../imgs/subtext.jpg");

function MeetTheArtist() {
  return (
    <div className="meet-the-artist">
      <h1>Meet the Artists</h1>
    
      <p>Hello, we are PaperSora! ଘ(੭*ˊᵕˋ)੭* ੈ♡‧₊˚ <br />
      We are a Victoria-based artist duo who love to make art. From the combination of our names of "paper" klip_sk and sr_"sora", the skies the limit for us with a pen and paper! <br />
      From anime to games to aesthetics and more, the two of us combined cover practically all the interests of the common nerd.</p>

      {/* Jas bio */}
      <div className="artist-info">
        <img 
          src={require("../imgs/jaspfp.png")} // Replace with a real image URL or import an image
          alt="Artist"
          className="artist-photo"
        />
        <div className="artist-bio">
          <h2>klip</h2>
          <p>
            Hi, I’m klip! I like creating animations and digital art of anime, games, and ocs (°▽°)
          </p>
          <p>
            jaswei1514@gmail.com <br />
            2508848456<br />
            tiktok: paper.klip<br />
            instagram: klip_sk<br />
          </p>
        </div>
      </div>
    
      {/* Sophie bio */}
      <div className="artist-info">
        <div className="artist-bio-right">
          <h2>Sora</h2>
          <p>
            Hello! My name is Sora and I love playing with colour and light in my art. I paint everything from personal work to anime to dramas to games and more!
          </p>
          <p>
            Email: sophier8817@gmail.com<br />
            Instagram: @sr_sora_<br />
            Tumblr: @srsora
          </p>
        </div>
        <img 
          src={require("../imgs/Illustration2.png")} // Replace with a real image URL or import an image
          alt="Artist"
          className="artist-photo"
        />
      </div>
    
    {/* Guest artist bios */}
    <h2>Guest Artists</h2>
    <div className="artist-profiles">
        {/* Osi bio */}
        <div className="artist-profile">
          <img 
            src={require("../imgs/osipfp.png")} // Replace with a real image URL or import an image
            alt="Artist 1"
            className="artist-photo"
          />
          <div className="guest-artist-bio-left">
            <h2>osi</h2>
            <p>
              i do original work and fanart of games, shows, and animes.
            </p>
            <p>
              email: regularosi.art@gmail.com <br />
              insta and tiktok: @lovri_ osi <br />
              phone number: 7788982695
            </p>
          </div>
        </div>

        {/* Alice bio */}
        <div className="artist-profile">
          <img 
            src={require("../imgs/alicepfp.png")} // Replace with a real image URL or import an image
            alt="Artist 2"
            className="artist-photo"
          />
          <div className="guest-artist-bio">
            <h2>a</h2>
            <p>
              I create handmade knit hats and accessories inspired by fan-favorite characters, blending cozy designs with unique fandom touches. Each piece is carefully crafted to reflect the charm of these characters in a fun and creative style!
            </p>
            <p>
              phone: 604-561-3589
            </p>
          </div>
        </div>
      </div>
  
      {/* In the community/where to find us blurb */}
      <h1>In the Community...</h1>
    
      <p>You can find us at SubText in the Student Union Building at the University of Victoria!</p>
      <img id="subtxt" src={subTextImageSrc} alt="Subtext image" className="gallery-image" />
        
      <p>You can also find us at various clubs at the Univeristy of Victoria, such as KPOP Club and GameDev Club, and of course, slinking around campus!</p>
    </div>
  );
}

export default MeetTheArtist;