<template>
  <div style="width: 100%;" class="pageTopMargin">
    <div class="centered bigWelcomeContainer">
      <img class="backgroundImage" src="/lilacProfile.jpg" />
      <div class="overImage">
        <div class="glassDiv bigWelcomeGlass">
          <h1 class="hugeWelcome">WELCOME</h1>
          <p class="welcomeDescription">My name is Lilac. I'm a multi-instrumentalist music producer and audio
            engineer. I've been making music for almost 10 years now and I've
            produced everything from acoustic ballads to trap bangers, cinematic atmospheres to indie funk.
            I can produce instrumentals for a myriad of genres, as well as record, mix, master, really whatever
            you need! So take a look around and if you like what you see/hear, hit me up!
          </p>
          <div class="iconsRow" style="display: flex;">
            <a class="socialMediaButton" href="https://www.tiktok.com/@lilac_rust" target="_blank"><i
                class="fa-brands fa-tiktok socialMediaIcon"></i></a>
            <a class="socialMediaButton" href="https://www.youtube.com/@lilacrust8805" target="_blank"><i
                class="fa-brands fa-youtube socialMediaIcon"></i></a>
            <a class="socialMediaButton" href="mailto:lilac.rust@gmail.com" target="_blank"><i
                class="fa-regular fa-envelope socialMediaIcon"></i></a>
            <a class="socialMediaButton" href="https://www.instagram.com/lilac_rust_music/" target="_blank"><i
                class="fa-brands fa-instagram socialMediaIcon"></i></a>
            <a class="socialMediaButton"
              href="https://open.spotify.com/artist/1YT4RD3frRo0r9jVY9mBB5?si=jTH5pF9NRJKeDGDx5sNNuw" target="_blank"><i
                class="fa-brands fa-spotify socialMediaIcon"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="glassDiv">
      <div class="carousel-container">
        <div class="instrumentalCarousel">
          <img class="slide" v-for="(image, index) in instrumentalImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)">
          <img class="slide" :src="instrumentalImages[0]">
        </div>
      </div>
      <div class="description">
        <h1 style="font-size: xx-large;">INSTRUMENTALS & BEATS</h1>
        <br />
        <div style="font-size: large;">
          I've got everything from laid-back jazz vibes to energetic electronic beats, cinematic atmospheres to indie
          funk
          grooves. Whether
          you're a singer, rapper, filmmaker, or content creator, chances are I've got
          something that will be perfect for your next project.
        </div>
        <br />
        <hr />
        <br />
        <div class="linkContainer">
          <a href="/instrumentals" class="mobileButtonLink" data-v-c3ceb15a=""
            style="font-size: large; width: fit-content;">
            Browse Instrumentals
            <i class="fa-solid fa-caret-right"></i>
          </a>
        </div>
      </div>
      <div class="allImagesContainer">
        <div class="imageRow">
          <img src="/instrumentals/whiteWizard/albumArt.jpg" width="25%" style="border-radius: 15px; margin: 2%;">
          <img src="/instrumentals/waterviewVolumeOne/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
        </div>
        <div class="imageRow">
          <img src="/instrumentals/popularKidsVolumeOne/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
          <img src="/instrumentals/highExposureVolumeOne/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
        </div>
      </div>
    </div>
    <div class="glassDiv" style="color: white;">
      <div class="allImagesContainer">
        <div class="imageRow">
          <img src="/mixingBoard.jpg" width="25%" style="border-radius: 15px; margin: 2%;">
          <img src="/micPic.jpg" width="25%" style="border-radius: 15px; margin: 2%;">
        </div>
        <div class="imageRow">
          <img src="/myStudio.jpg" width="25%" style="border-radius: 15px; margin: 2%;">
        </div>
      </div>
      <div class="carousel-container">
        <div class="studioServicesCarousel">
          <img class="slide" v-for="(image, index) in studioServicesImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)">
          <img class="slide" :src="studioServicesImages[0]">
        </div>
      </div>
      <div class="description">
        <h1 style="font-size: xx-large;">STUDIO SERVICES</h1>
        <br />
        <div style="font-size: large;">
          Whether you thrive in the dynamic energy of in-person collaboration at the studio or prefer the flexibility of
          remote
          working, rest assured that I can provide the expertise and support needed to elevate your musical endeavors.
          With more than ten years immersed in the art of music making, I can turn your musical ideas into reality as I
          have experience
          with every step in the songwriting, recording, mixing, and mastering process.
        </div>
        <br />
        <hr />
        <br />
        <div class="linkContainer">
          <a href="/studioservices" class="mobileButtonLink" style="font-size: large; width: fit-content;">
            Studio Services Info Page
            <i class="fa-solid fa-caret-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="glassDiv">
      <div class="carousel-container">
        <div class="pastProjectsCarousel">
          <img class="slide" v-for="(image, index) in pastProjectsImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)">
          <img class="slide" :src="pastProjectsImages[0]">
        </div>
      </div>
      <div class="description">
        <h1 style="font-size: xx-large;">PAST PROJECTS</h1>
        <br />
        <div style="font-size: large;">
          If you want to hear my work in action, give some of my past projects a listen
        </div>
        <br />
        <hr />
        <br />
        <div class="linkContainer">
          <a href="/pastprojects" class="mobileButtonLink" style="font-size: large; width: fit-content;">
            Past Projects
            <i class="fa-solid fa-caret-right"></i>
          </a>
        </div>
      </div>
      <div class="allImagesContainer">
        <div class="imageRow">
          <img src="/songs/gardenOfEden/albumArt.jpg" width="25%" style="border-radius: 15px; margin: 2%;">
          <img src="/songs/slappin/albumArt.jpg" width="25%" style="border-radius: 15px; margin: 2%;">
        </div>
        <div class="imageRow">
          <img src="/songs/onMyKnees/albumArt.jpg" width="25%" style="border-radius: 15px; margin: 2%;">
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      instrumentalImages: [
        '/instrumentals/whiteWizard/albumArt.jpg',
        '/instrumentals/waterviewVolumeOne/albumArt.jpg',
        '/instrumentals/popularKidsVolumeOne/albumArt.jpg',
        '/instrumentals/highExposureVolumeOne/albumArt.jpg'
      ],
      studioServicesImages: [
        '/mixingBoard.jpg',
        '/myStudio.jpg',
        '/micPic.jpg',
      ],
      pastProjectsImages: [
        '/songs/gardenOfEden/albumArt.jpg',
        '/songs/slappin/albumArt.jpg',
        '/songs/onMyKnees/albumArt.jpg',
      ]
    }
  }
}
</script>

<style scoped>
.welcomeDescription {
  font-size: x-large;
}

.bigWelcomeGlass {
  width: 100%;
  justify-content: center;
  height: 100%;
  margin: 0 !important;
  border-radius: 0;
  backdrop-filter: blur(10px) !important;
  flex-direction: column;
  justify-content: space-evenly;
}

.bigWelcomeContainer {
  position: relative;
}

.overImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 72vh;
  text-align: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.iconsRow {
  width: 100%;
  gap: 2vw;
  justify-content: center;
}

.hugeWelcome {
  font-size: 5vw;
}

.backgroundImage {
  position: relative;
  top: -8vh;
  left: 0;
  width: 100%;
  object-fit: cover;
  height: 80vh;
}

.centered {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.allImagesContainer {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.imageRow {
  display: flex;
  justify-content: center;
  width: 100%;
}

.glassDiv {
  margin: 2%;
  color: white;
  padding: 2%;
}

.carousel-container {
  display: none;
}

.linkContainer {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.mobileButtonLink {
  height: 5vh;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  border-radius: 100vh;
  background-color: #ffffff26;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #fff;
}

.socialMediaIcon {
  font-size: 300%;
  margin: auto;
}

.socialMediaButton {
  height: 10vh;
  width: 10vh;
  display: flex;
  justify-content: center;
  border-radius: 100vh;
  background-color: #ffffff26;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #fff;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .socialMediaIcon {
    font-size: 200%;
    margin: auto;
  }

  .socialMediaButton {
    max-height: 50px;
    max-width: 50px;
  }

  .welcomeDescription {
    font-size: large;
  }

  .bigWelcomeGlass {
    padding: 5% !important;
    background: rgba(0, 0, 0, 0.5) !important;
    justify-content: space-evenly;
  }

  .hugeWelcome {
    font-size: 300%;
  }

  .mobileButtonLink {
    padding: 5%;
    gap: 2vw;
  }

  .glassDiv {
    width: 100%;
    margin: 0%;
    padding: 0%;
    margin-top: 0%;
    border-radius: 0;
    background: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
  }

  .glassDiv .description {
    width: 100%;
    text-align: center;
    padding: 5%;
  }

  .allImagesContainer {
    display: none;
  }

  .carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: block;
  }

  .instrumentalCarousel {
    display: flex;
    animation: slideAnimationFiveImages 25s linear infinite;
    /* Adjust animation duration as needed */
  }

  .studioServicesCarousel {
    display: flex;
    animation: slideAnimationFourImages 25s linear infinite;
  }

  .pastProjectsCarousel {
    display: flex;
    animation: slideAnimationFourImages 25s linear infinite;
  }

  .slide {
    width: 100%;
    flex-shrink: 0;
    padding: 5%;
    border-radius: 50px;
  }

  @keyframes slideAnimationFourImages {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-300%);
      /* Adjust the value (-300%) based on the number of images */
    }
  }

  @keyframes slideAnimationFiveImages {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-400%);
      /* Adjust the value (-300%) based on the number of images */
    }
  }

  .linkContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
