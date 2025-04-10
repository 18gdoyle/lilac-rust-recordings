<script setup>
import PastProject from '@/components/PastProject.vue';
</script>
<template>
    <div id="pastProjectsPage">
        <div class="pastProjects">
            <div class="pastProjectSpotifyDiv centered">
                <br />
                <h1 class="pageTitle">PAST PROJECTS</h1>
                <p class="pageDescription">A collection of songs that I wrote, recorded, produced, mixed, and/or
                    mastered.</p>
                <div style="width: 100%; height: 50vh">
                    <iframe class="spotifyIframe"
                        src="https://open.spotify.com/embed/playlist/0ulTgeAmBJgjt9y959z2px?utm_source=generator"
                        width="100%" height="100%" frameBorder="0" allowfullscreen="false"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                </div>
            </div>
            <br />
            <h1 class="pageSubtitle centered">PAST PROJECTS TIMELINE</h1>
            <div class="pastProjectsRow">
                <PastProject :title="'Lilac Rust x Megan Mary - Dark Nights'" :date="'April 2025'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :spotifyButton="'https://open.spotify.com/album/614FS39u80TXGLrom1zZHK?si=BDQ9B-j2SU-x7RpmdNhJdw'"
                    :streamingServices="'https://lilacrust.com/lilacrustmusic'" :albumArt="'/songs/darkNights/albumArt.jpg'"
                    :description="`Just a couple totally huge rock tracks. I wrote, recorded, mixed, and mastered all the tracks on this thing. However, Megan's performance is really what brings this record to the next level`">
                </PastProject>
                <PastProject :title="'Lilac Rust - Big Buck Backshots: Original Game Soundtrack'" :date="'February 2025'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :spotifyButton="'https://open.spotify.com/album/2zqmqIgb9y2jKVPkDsOk3u?si=3W6ui6TITsmWSKqkU2AVFA'"
                    :streamingServices="'https://lilacrust.com/lilacrustmusic'" :albumArt="'/songs/bigBuckBackshots/albumArt.png'"
                    :descriptionButtonLink="'https://store.steampowered.com/app/3388940/Big_Buck_Backshots/'"
                    :descriptionButtonText="'Check out Big Buck Backshots on Steam'"
                    :description="`Electronic soundtrack I did for a video game my friend made. Pretty silly stuff here.`">
                </PastProject>
            </div>
            <div class="pastProjectsRow">
                <PastProject :title="'Lilac Rust - SONGS FOR THE SOUNDS A CLOCK MAKES'" :date="'August 2024'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :spotifyButton="'https://open.spotify.com/album/3TQALCUvSqMHdxrTAQzeqM?si=0gxgcokHRsGcueaZXoQksw'"
                    :streamingServices="'https://lilacrust.com/lilacrustmusic'" :albumArt="'/songs/songsForTheSoundsAClockMakes/albumArt.jpg'"
                    :description="`Chill ambient tracks I made. v cool`">
                </PastProject>
                <PastProject :title="`Lilac Rust - RYAN'S ROAD RAGE`" :date="'March 2024'"
                    :spotifyButton="'https://open.spotify.com/album/2h7c1uTMoawUBVypkAaeE6?si=TPUT-S0aS2ibYX0TySdX5w'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :streamingServices="'https://lilacrust.com/lilacrustmusic'" :albumArt="'/songs/ryansRoadRage/albumArt.jpg'"
                    :description="`A fun little electronic track I made. Big synths, big drums, good stuff.`">
                </PastProject>
            </div>
            <div class="pastProjectsRow">
                <PastProject :title="'Funky Lamp - In Light of Changes'" :date="'February 2024'"
                    :instagramButton="'https://www.instagram.com/funkylamppgh'"
                    :spotifyButton="'https://open.spotify.com/album/6XFeI58KyQ5cggapg3BHsm?si=SKWKL93TSN2bOJqovMJQVw'"
                    :streamingServices="'https://linktr.ee/funkylamp'" :albumArt="'/songs/inLightOfChanges/albumArt.png'"
                    :description="`I was really lucky to get to work on Funky Lamp's debut album. I did all the mixing and mastering, and also got to do some keys for the record. I've been working with them since they started, and it's been really cool to watch them evolve as a band.`">
                </PastProject>
                <PastProject :title="'Funky Lamp - On My Knees'" :date="'December 2023'"
                    :instagramButton="'https://www.instagram.com/funkylamppgh'"
                    :spotifyButton="'https://open.spotify.com/artist/3JnvdCfcYZJtPtJSahlsLw'"
                    :streamingServices="'https://linktr.ee/funkylamp'" :albumArt="'/songs/onMyKnees/albumArt.jpg'"
                    :description="`Funky Lamp recorded the song independently in Pittsburgh, and then sent me the stems for the track while I was working in Baltimore so that I could mix and master the song. I am very experienced with working with artists completely online, so if that\'s something you\'d be interested in, shoot me an email at <a class='hover-underline-animation' href='mailto:lilac.rust@gmail.com'>lilac.rust@gmail.com</a>.`">
                </PastProject>
            </div>
            <div class="pastProjectsRow">
                <PastProject :title="'Lilac Rust - WHITE WIZARD'" :date="'April 2023'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :youtubeButton="'https://www.youtube.com/@lilacrust'"
                    :streamingServices="'https://lilacrust.com/lilacrustmusic'"
                    :albumArt="'/instrumentals/whiteWizard/albumArt.jpg'"
                    :description="`Believe it or not, I also do scoring for film, tv, and video games. So if you need music for that sort of thing, hit me up.`">
                </PastProject>
                <PastProject :title="'Funky Lamp - Garden of Eden'" :date="'April 2022'"
                    :instagramButton="'https://www.instagram.com/funkylamppgh'"
                    :spotifyButton="'https://open.spotify.com/artist/3JnvdCfcYZJtPtJSahlsLw'"
                    :streamingServices="'https://linktr.ee/funkylamp'" :albumArt="'/songs/gardenOfEden/albumArt.jpg'"
                    :description="'I had the pleasure of recording, producing, mixing, and mastering Funky Lamp\'s debut EP. We recorded this in a dorm at the University of Pittsburgh, so given the circumstances, I\'m pretty happy with the way it turned out.'"
                    :review="'Lilac did an incredible job mixing our EP. Emphasizing the stylistic diversity of each track, he took our raw recordings and gave every song a unique and professional sound. He was also wonderful to work with--professional, communicative, and friendly. Not to mention affordable, too! I highly recommend choosing Lilac for your next project.'">
                </PastProject>
            </div>
            <div class="pastProjectsRow">
                <PastProject :title="'Lilac Rust - Waterview (Volume II)'" :date="'September 2021'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :youtubeButton="'https://www.youtube.com/@lilacrust'"
                    :streamingServices="'https://lilacrust.com/lilacrustmusic'"
                    :albumArt="'/instrumentals/waterviewVolumeOne/albumArt.jpg'"
                    :description="'Kind of like a lofi hip hop beats tape, but not really. Some of my favorite beats I\'ve ever done are on here.'">
                </PastProject>
                <PastProject :title="'Lilac Rust - Popular Kids (Volume I)'" :date="'January 2021'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :youtubeButton="'https://www.youtube.com/@lilacrust'"
                    :streamingServices="'https://lilacrust.com/lilacrustmusic'"
                    :albumArt="'/instrumentals/popularKidsVolumeOne/albumArt.jpg'"
                    :description="'Another instrumental tape by yours truly. These have more of a pop vibe going for them. Great tracks for singers.'">
                </PastProject>
            </div>
            <div class="pastProjectsRow">
                <PastProject :title="'Lilac Rust - High Exposure (Volume I)'" :date="'September 2020'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :youtubeButton="'https://www.youtube.com/@lilacrust'"
                    :streamingServices="'https://lilacrust.com/lilacrustmusic'"
                    :albumArt="'/instrumentals/highExposureVolumeOne/albumArt.jpg'"
                    :description="'My first beat tape. A lot of hard hitting rap beats on this thing.'">
                </PastProject>
                <PastProject :title="'Greggy D - Slappin'" :date="'September 2019'"
                    :instagramButton="'https://www.instagram.com/greggy_deez_nutz/'"
                    :spotifyButton="'https://open.spotify.com/artist/5UImaUI5fuzslO7pEtYOF6?si=ByVt_vmlTpiLtPm3TRlDAA'"
                    :albumArt="'songs/slappin/albumArt.jpg'"
                    :description="'I produced the beat, recorded and mixed the vocals, and also mastered the track. This is some of my earlier work, so the production quality isn\'t the highest, but it\'s a song I\'m still very proud of.'">
                </PastProject>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pastProjectSpotifyDiv {
    padding: 5%;
    padding-top: 0;
    padding-bottom: 2%;
}

.pageTitle {
    font-size: 4vw;
}

.pageSubtitle {
    font-size: 2.5vw;
}

.centered {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

#pastProjectsPage {
    display: flex;
    justify-content: center;
    position: relative;
}

.pageDescription {
    font-size: x-large;
    color: var(--color-text);
    margin-bottom: 2%;
}

.pastProjects {
    width: 100%;
}

.pastProjectsRow {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}

.whiteGlassDiv {
    margin-top: 2%;
    color: white;
    text-align: center;
    width: fit-content;
}

.glassDiv {
    flex-direction: column;
    align-items: center;
    padding: 2%;
}

@media only screen and (max-width: 850px) {
    .whiteGlassDiv {
        width: 100%;
        background: rgba(0, 0, 0, 0);
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
        padding: 5%;
        margin-top: 0;
    }

    .pageDescription {
        font-size: medium;
        margin-bottom: 10%;
    }

    .pageTitle {
        padding: 5%;
        font-size: 10vw;
    }

    .pageSubtitle {
        padding-top: 5%;
        font-size: 6vw;
    }

    .spotifyIframe {
        height: 106%;
    }

    .pastProjectsRow {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }

    .glassDiv {
        width: 100%;
        margin: 0%;
        border-radius: 0;
        background: rgba(0, 0, 0, 0);
        padding: 5%;
    }
}
</style>