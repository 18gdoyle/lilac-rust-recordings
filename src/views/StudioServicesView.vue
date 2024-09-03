<template>
    <div class="pageTopMargin">
        <br />
        <div style="display: flex; align-items: center; justify-content: center;">
            <h1 class="pageTitle">STUDIO SERVICES</h1>
        </div>
        <div class="glassDiv" style="color: white;">
            <div class="mobileImage">
                <img alt="Lilac Rust's Studio" class="slide" src="/myStudio.jpg">
            </div>
            <div class="description" style="display: flex; flex-direction: column; justify-content: center;">
                <h1 class="subTitle">INSTRUMENTAL PRODUCTION AND SONG WRITING</h1>
                <div style="font-size: medium;">
                    After a decade of work, I've made quite a few songs. I've produced everything from acoustic
                    ballads to trap bangers, soulful R&B to heavy metal.
                    If you can't find an instrumental in my catalogue that works with your artistic
                    vision, I'm more than happy to tailor-make something exclusively for you.
                </div>
                <br />
                <hr />
                <br />
                <div class="linkContainer">
                    <a href="/instrumentals" class="mobileButtonLink" style="font-size: large; width: fit-content;">
                        Browse Instrumentals
                        <i class="fa-solid fa-caret-right"></i>
                    </a>
                    <a href="/about" class="mobileButtonLink" style="font-size: large; width: fit-content;">
                        Contact Me
                        <i class="fa-solid fa-caret-right"></i>
                    </a>
                </div>
            </div>
            <div class="image" style="flex-direction: column; justify-content: center; align-items: center;">
                <img alt="Lilac Rust's Studio" src="/myStudio.jpg" width="100%" style="border-radius: 15px; margin: 2%;">
            </div>
        </div>
        <div class="glassDiv" style="color: white; margin: 2%;">
            <div class="image" style="flex-direction: column; justify-content: center; align-items: center;">
                <img alt="Microphone" src="/micPic.jpg" width="100%" style="border-radius: 15px; margin: 2%;">
            </div>
            <div class="mobileImage">
                <img alt="Microphone" class="slide" src="/micPic.jpg">
            </div>
            <div class="description" style="display: flex; flex-direction: column; justify-content: center;">
                <h1 class="subTitle">RECORDING</h1>
                <div style="font-size: medium;">
                    With an extensive collection of microphones, instruments, and VST Plug-Ins at the studio, I'm
                    equipped to capture your artistry in its purest form. If you lean towards remote collaboration, I'm
                    readily available to offer guidance on microphone selection, optimal recording techniques, and more.
                </div>
                <br />
                <hr />
                <br />
                <div class="linkContainer">
                    <a href="/about" class="mobileButtonLink" style="font-size: large; width: fit-content;">
                        Contact Me
                        <i class="fa-solid fa-caret-right"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="glassDiv">
            <div class="mobileImage">
                <img alt="Mixing Board" class="slide" src="/mixingBoard.jpg">
            </div>
            <div class="description" style="display: flex; flex-direction: column; justify-content: center;">
                <h1 class="subTitle">MIXING AND MASTERING</h1>
                <div style="font-size: medium;">
                    With a ton of mixing and mastering know-how under my belt, I'm here to give your project that slick
                    and pro-level sound.
                    Over the years, I have
                    fine-tuned my skills to seamlessly blend elements, enhance clarity, and optimize dynamics, providing
                    artists with a sonically refined masterpiece.
                </div>
                <br />
                <hr />
                <br />
                <div class="linkContainer">
                    <a href="/pastprojects" class="mobileButtonLink" style="font-size: large; width: fit-content;">
                        Past Projects
                        <i class="fa-solid fa-caret-right"></i>
                    </a>
                    <a href="/about" class="mobileButtonLink" style="font-size: large; width: fit-content;">
                        Contact Me
                        <i class="fa-solid fa-caret-right"></i>
                    </a>
                </div>
            </div>
            <div class="image" style="flex-direction: column; justify-content: center; align-items: center;">
                <img alt="Mixing Board" src="/mixingBoard.jpg" width="100%" style="border-radius: 15px; margin: 2%;">
            </div>
        </div>
        <br />
    </div>
</template>

<style scoped>
.pageTitle {
    font-size: 4vw;
}

.subTitle {
    font-size: xx-large;
    margin-bottom: 1%;
}

.description {
    width: 70%;
}

.image {
    display: flex;
    width: 30%;
    padding: 2%;
}

.linkContainer {
    display: flex;
}

.slide {
    display: none;
}

.glassDiv {
    padding: 2%
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
    margin-right: 1%;
    margin-bottom: 2%;
    transition: .3s;
}
.mobileButtonLink:hover {
  box-shadow: 0 0 15px 5px rgb(255, 255, 255, 0.5);
}

@media only screen and (max-width: 768px) {
    .mobileButtonLink {
        padding: 5%;
        gap: 2vw;
    }

    .slide {
        display: block;
        width: 100%;
        flex-shrink: 0;
        padding: 5%;
        border-radius: 50px;
    }

    .description {
        width: 100%;
        text-align: center;
    }

    .glassDiv {
        background-color: rgba(0, 0, 0, 0);
        flex-direction: column;
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
        padding: 2%;
    }

    .image {
        display: none;
    }

    .linkContainer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        gap: 2vh;
    }

    .pageTitle {
        font-size: 10vw;
    }
}
</style>
