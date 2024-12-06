<template>
  <div class="about">
    <div class="glassDiv">
      <div class="imgAndText">
        <img
          alt="Lilac Rust Profile Photo"
          src="/lilacProfileWithFace.jpg"
          class="contactCard-img"
        />
        <div class="aboutDescription">
          Hey there! My name is Greg, but I go by Lilac Rust online. I'm a
          multi-instrumentalist music producer and audio engineer. I've been
          making music for almost 10 years now and I've produced everything from
          acoustic ballads to trap bangers, cinematic atmospheres to indie funk.
          I can produce instrumentals for a myriad of genres, as well as record,
          mix, master, really whatever you need! Chances are, if you are doing
          something related to music, I can probably help you out. Just hit me
          up using one of the links below and we'll chat.
          <br />
          ~
          <br />
          Greg, a.k.a Lilac Rust
          <br />
          <br />
          <div>
            <a
              href="https://soundbetter.com/profiles/320009-lilac-rust#"
              target="_blank"
            >
              <button class="transparentButton">
                Click Here to Hire Me For a Project on SoundBetter
              </button>
            </a>
          </div>

          OR
          <br />
          Send an email to
          <a
            class="hover-underline-animation emailLink"
            href="mailto:lilac.rust@gmail.com"
            target="_blank"
            >lilac.rust@gmail.com</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transparentButton {
  flex-direction: column;
  width: 40%;
  font-size: x-large;
  padding: 1%;
  justify-content: center;
  align-items: center;
  border-radius: 100vh;
  background-color: #ffffff26;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 5px;
  transition: 0.3s;
}
.transparentButton:hover {
  box-shadow: 0 0 15px 5px rgb(255, 255, 255, 0.5);
}
.emailLink {
  width: fit-content;
  font-size: x-large;
  display: inline;
}
.centered {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.pageTitle {
  font-size: 4vw;
}

.aboutDescription {
  padding: 2%;
  font-size: x-large;
  text-align: center;
}

.iconsRow {
  width: 100%;
  gap: 2vw;
  justify-content: center;
  display: flex;
}

.socialMediaIcon {
  font-size: 300%;
  margin: auto;
}

.imgAndText {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  transition: .3s;
}
.socialMediaButton:hover {
  box-shadow: 0 0 15px 5px rgb(255, 255, 255, 0.5);
}

.contactCard-img {
  border-radius: 50%;
  margin: auto;
  display: inline;
  width: 20%;
  box-shadow: 20px 20px 22px rgba(0, 0, 0, 0.2);
}

.glassDiv {
  margin: 0;
  padding: 2%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
}

@media only screen and (max-width: 850px) {
  .transparentButton {
    padding: 5%;
    width: 90vw;
  }
}

@media only screen and (max-width: 768px) {
  .contactCard-img {
    width: 80%;
  }

  .aboutDescription {
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }

  .imgAndText {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .transparentButton {
    padding: 5%;
    width: 90vw;
  }
}
</style>
