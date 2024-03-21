<template>
    <div class="pageTopMargin">
        <div class="centered">
            <br />
            <h1 class="pageTitle">WEB DESIGN</h1>
            <p class="pageDescription">
                If you've been making and releasing music for as long as I have, then you understand the importance of
                having your own website. A centralized location where listeners can find new music, learn about
                upcoming gigs, and buy merch. If you're ready to take the next step with your music career, creating a
                professional website is a great place to start. If this sounds like something you're ready to do, hit me
                up.
            </p>
            <br />
            <a href="/about" class="mobileButtonLink">
                <strong>CONTACT INFO</strong>
            </a>
            <hr class="lineBreak" />
            <h1 class="pageSubtitle">PAST WORK</h1>
            <div class="websiteContainer">
                <div class="imgContainer">
                    <img alt="Lilac Rust's Website" src="/lilacRustWebsite.png" @click="openNewTab('https://lilacrust.com/')"
                        class="websiteImage" />
                    <img alt="Lilac Rust's Website" src="/lilacRustWebsiteMobile.png" @click="openNewTab('https://lilacrust.com/')" class="websiteImageMobile" />
                </div>
                <div class="glassDiv">
                    <a href="https://lilacrust.com/" target="_blank"
                        class="hover-underline-animation largeLink"><strong>lilacrust.com</strong></a>
                    <br />
                    <p class="websiteDescription">The website linked within the same website. Website-ception. Very
                        cool. A great example of what I can do for a musical brand.
                    </p>
                </div>
            </div>
            <div class="websiteContainer">
                <div class="imgContainer">
                    <img alt="Greg Doyle's Website" src="/gregDoyleWebsite.png" @click="openNewTab('https://gregoryvincentdoyle.com/')"
                        class="websiteImage" />
                    <img alt="Greg Doyle's Website" src="/gregDoyleWebsiteMobile.png" @click="openNewTab('https://gregoryvincentdoyle.com/')" class="websiteImageMobile" />
                </div>
                <div class="glassDiv">
                    <a href="https://gregoryvincentdoyle.com/" target="_blank"
                        class="hover-underline-animation largeLink"><strong>gregoryvincentdoyle.com</strong></a>
                    <br />
                    <p class="websiteDescription">
                        A website I made for my corporate work life alter ego
                    </p>
                </div>
            </div>
            <div class="websiteContainer">
                <div class="imgContainer">
                    <img alt="Catherine's Pet Care Website" src="/cPC.png" @click="openNewTab('https://catherines-pet-care.uk.r.appspot.com/')"
                        class="websiteImage" />
                        <img alt="Catherine's Pet Care Website" src="/cPCMobile.png" @click="openNewTab('https://catherines-pet-care.uk.r.appspot.com/')" class="websiteImageMobile" />
                </div>
                <div class="glassDiv">
                    <a href="https://catherines-pet-care.uk.r.appspot.com/" target="_blank"
                        class="hover-underline-animation largeLink"><strong>catherines-pet-care.uk.r.appspot.com</strong></a>
                    <br />
                    <p class="websiteDescription">
                        A website I made for a pet care business
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openNewTab(url) {
            window.open(url, '_blank').focus();
        }
    }
}
</script>

<style scoped>
.mobileButtonLink {
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    border-radius: 100vh;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    color: #fff;
    font-size: large;
}

.pageTitle {
    font-size: 4vw;
}

.lineBreak {
    margin: 5%;
    width: 90%;
}

.pageSubtitle {
    font-size: 2.5vw;
}

.pageDescription {
    text-align: center;
    font-size: x-large;
    width: 80%;
}

.websiteDescription {
    text-align: center;
    font-size: large;
}

.glassDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    margin: 0;
    flex-direction: column;
    background: rgba(0, 0, 0, 0);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
}

.largeLink {
    font-size: x-large;
}

.glassDivsRow {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: fit-content;
}

.websiteContainer {
    padding: 2%;
    width: 90%;
    height: 100%;
    flex-direction: column;
}

.centered {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.imgContainer {
    width: 100%;
    display: flex;
    justify-content: center;
}

.websiteImageMobile {
    display: none;
    border-radius: 16px;
    width: 100%;
    cursor: pointer;
}

.websiteImage {
    border-radius: 16px;
    width: 100%;
    cursor: pointer;
}

@media only screen and (max-width: 768px) {
    .pageTitle {
        font-size: 10vw;
    }

    .websiteImage {
        display: none;
    }

    .websiteImageMobile {
        display: block;
    }

    .pageDescription {
        font-size: medium;
    }

    .mobileButtonLink {
        padding: 5%;
    }

    .pageSubtitle {
        font-size: 6vw;
        margin-top: 15%;
    }
}
</style>