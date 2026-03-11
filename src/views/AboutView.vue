<template>
  <div class="aboutPage">
    <div class="glassDiv">
      <div class="imageAndButtons">
        <div>
          <img alt="Lilac Rust Profile Photo" src="/lilacProfileWithFace.jpg" class="contactCard-img" />
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; width: 100%;">
          <div class="bigButton">
            <a href="https://wa.me/16102338733" target="_blank" style="width: 100%;">
              <button style="width: 100%; display: flex; justify-content: left;">
                <i class="fa-brands fa-whatsapp" style="font-size: 40px;"></i>
                <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                  <div>WhatsApp</div>
                  <div style="color: lightgray; ">+1 610-233-8733</div>
                </div>
              </button>
            </a>
          </div>
          <div class="bigButton">
            <a href="sms:6102338733" target="_blank" style="width: 100%;">
              <button style="width: 100%; display: flex; justify-content: left;">
                <i class="fa-solid fa-comment" style="font-size: 40px;"></i>
                <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                  <div>Text</div>
                  <div style="color: lightgray; ">610-233-8733</div>
                </div>
              </button>
            </a>
          </div>
          <div class="bigButton">
            <a href="tel:6102338733" target="_blank" style="width: 100%;">
              <button style="width: 100%; display: flex; justify-content: left;">
                <i class="fa-solid fa-phone" style="font-size: 40px;"></i>
                <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                  <div>Call</div>
                  <div style="color: lightgray; ">610-233-8733</div>
                </div>
              </button>
            </a>
          </div>
          <div class="bigButton">
            <a href="mailto:lilac.rust@gmail.com" target="_blank" style="width: 100%;">
              <button style="width: 100%; display: flex; justify-content: left;">
                <i class="fa-solid fa-envelope" style="font-size: 40px;"></i>
                <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                  <div>Email</div>
                  <div style="color: lightgray; ">lilac.rust@gmail.com</div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="aboutDescription">
        Hey there! My name is Greg, but I go by Lilac Rust online. I'm a
        multi-instrumentalist music producer and audio engineer. I've been
        making music for almost 10 years now and I've produced everything from
        acoustic ballads to trap bangers, cinematic soundtracks to indie funk.
        I can produce instrumentals for a myriad of genres, as well as record,
        mix, master, really whatever you need! Chances are, if you are doing
        something related to music, I can probably help you out.
      </div>
    </div>
  </div>
</template>

<style scoped>
.bigButton {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.aboutDescription {
  font-size: x-large;
}

.contactCard-img {
  border-radius: 16px;
  box-shadow: 20px 20px 22px rgba(0, 0, 0, 0.2);
  transition: all .3s;
  width: 310px;
}

.contactCard-img:hover {
  transform: scale(105%);
}

.glassDiv {
  margin: 0;
  padding: 2%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, .5);
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
}

.imageAndButtons {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  align-items: center;
  width: 100%;
}

.aboutPage {
  padding: 20px;
}

@media only screen and (max-width: 768px) {
  .contactCard-img {
    width: 100%;
  }

  .imageAndButtons {
    flex-direction: column;
  }

  .glassDiv {
    padding: 15px;
  }

  .aboutPage {
    padding: 10px;
  }

  .aboutDescription {
    font-size: large;
  }
}
</style>
