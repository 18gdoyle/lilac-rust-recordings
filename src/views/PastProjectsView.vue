<script setup>
import PastProject from '@/components/PastProject.vue';
</script>
<template>
    <div id="pastProjectsPage" class="pageTopMargin">
        <div class="pastProjects">
            <div class="glassDiv" style="flex-direction: column; height: fit-content; justify-content: center; align-items: center;">
                <div style="width: 100%; height: 50vh">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0ulTgeAmBJgjt9y959z2px?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0"
                        allowfullscreen="false"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                    </iframe>
                </div>
                <div class="whiteGlassDiv" style="margin-top: 2%; color: white; text-align: center; width: fit-content;">
                    <h3>A collection of songs that I wrote, recorded, produced, mixed, and or mastered.</h3>
                </div>
            </div>
            <div style="display: flex; justify-content: space-evenly;">
                <PastProject :title="'Funky Lamp - On My Knees'" :date="'December 2023'"
                    :spotifyIframe="'https://open.spotify.com/embed/album/233oHAtm4vs707QfKppDp7?utm_source=generator'"
                    :instagramButton="'https://www.instagram.com/funkylamppgh'"
                    :spotifyButton="'https://open.spotify.com/artist/3JnvdCfcYZJtPtJSahlsLw'"
                    :streamingServices="'https://linktr.ee/funkylamp'"
                    :albumArt="'/songs/onMyKnees/albumArt.jpg'"
                    :description="`Funky Lamp recorded the song independently in Pittsburgh, and then sent me the stems for the track while I was working in Baltimore so that I could mix and master the song. I am very experienced with working with artists completely online, so if that\'s something you\'d be interested in, shoot me an email at <a class='hover-underline-animation' href='mailto:lilac.rust@gmail.com'>lilac.rust@gmail.com</a>.`">
                </PastProject>
                <PastProject :title="'Lilac Rust - WHITE WIZARD'" :date="'April 2023'"
                    :spotifyIframe="'https://open.spotify.com/embed/album/4fwViAsmYPMIrdrGjRNTNH?utm_source=generator'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :youtubeButton="'https://www.youtube.com/@lilacrust8805'"
                    :streamingServices="'https://li.sten.to/lilac_rust'"
                    :albumArt="'/instrumentals/whiteWizard/albumArt.jpg'"
                    :description="`Believe it or not, I also do scoring for film, tv, and video games. The track WHITE WIZARD - CINEMATIC VERSION is a song I composed for a currently unreleased indie video game. So if you need music for your game/tv show/film, hit me up. <a class='hover-underline-animation' href='mailto:lilac.rust@gmail.com'>lilac.rust@gmail.com</a>`">
                </PastProject>
            </div>
            <div style="display: flex; justify-content: space-evenly;">
                <PastProject :title="'Funky Lamp - Garden of Eden'" :date="'April 2022'"
                    :spotifyIframe="'https://open.spotify.com/embed/album/0XRfT1WcQRLcVThtMf4DGO?utm_source=generator'"
                    :instagramButton="'https://www.instagram.com/funkylamppgh'"
                    :spotifyButton="'https://open.spotify.com/artist/3JnvdCfcYZJtPtJSahlsLw'"
                    :streamingServices="'https://linktr.ee/funkylamp'"
                    :albumArt="'/songs/gardenOfEden/albumArt.jpg'"
                    :description="'I had the pleasure of recording, producing, mixing, and mastering Funky Lamp\'s debut EP. We recorded this in a dorm at the University of Pittsburgh, so given the circumstances, I\'m pretty happy with the way it turned out.'"
                    :review="'Lilac did an incredible job mixing our EP. Emphasizing the stylistic diversity of each track, he took our raw recordings and gave every song a unique and professional sound. He was also wonderful to work with--professional, communicative, and friendly. Not to mention affordable, too! I highly recommend choosing Lilac for your next project.'">
                </PastProject>
                <PastProject :title="'Lilac Rust - Waterview (Volume II)'" :date="'September 2021'"
                    :spotifyIframe="'https://open.spotify.com/embed/album/0sWEVOS6QN8Pw5qzskjDqr?utm_source=generator'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :youtubeButton="'https://www.youtube.com/@lilacrust8805'"
                    :streamingServices="'https://li.sten.to/lilac_rust'"
                    :albumArt="'/instrumentals/waterviewVolumeOne/albumArt.jpg'"
                    :description="'Kind of like a lofi hip hop beats tape, but not really. Some of my favorite beats I\'ve ever done are on here. All of the instrumentals on this EP are for sale. Click HERE to browse the full selection.'">
                </PastProject>
            </div>
            <div style="display: flex; justify-content: space-evenly;">
                <PastProject :title="'Lilac Rust - Popular Kids (Volume I)'" :date="'January 2021'"
                    :spotifyIframe="'https://open.spotify.com/embed/album/7rG8bBy8k8FcPfiICOEUUr?utm_source=generator'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :youtubeButton="'https://www.youtube.com/@lilacrust8805'"
                    :streamingServices="'https://li.sten.to/lilac_rust'"
                    :albumArt="'/instrumentals/popularKidsVolumeOne/albumArt.jpg'"
                    :description="'Another instrumental tape by yours truly. These have more of a pop vibe going for them. Great tracks for singers. All of the instrumentals on this EP are for sale. Click HERE to browse the full selection.'">
                </PastProject>
                <PastProject :title="'Lilac Rust - High Exposure (Volume I)'" :date="'September 2020'"
                    :spotifyIframe="'https://open.spotify.com/embed/album/1mPKZ6s1sGYxXUQvj4j3Nz?utm_source=generator'"
                    :instagramButton="'https://www.instagram.com/lilac_rust_music/'"
                    :tikTokButton="'https://www.tiktok.com/@lilac_rust'"
                    :youtubeButton="'https://www.youtube.com/@lilacrust8805'"
                    :streamingServices="'https://li.sten.to/lilac_rust'"
                    :albumArt="'/instrumentals/highExposureVolumeOne/albumArt.jpg'"
                    :description="'My first beat tape. A lot of hard hitting rap beats on this thing. All of the instrumentals on this EP are for sale. Click HERE to browse the full selection.'">
                </PastProject>
            </div>
            <div style="display: flex; justify-content: space-evenly;">
                <PastProject :title="'Greggy D - Slappin'" :date="'September 2019'"
                    :spotifyIframe="'https://open.spotify.com/embed/album/6W8t1p6z6e8sqhug6a0UkL?utm_source=generator'"
                    :instagramButton="'https://www.instagram.com/greggy_deez_nutz/'"
                    :spotifyButton="'https://open.spotify.com/artist/5UImaUI5fuzslO7pEtYOF6?si=ByVt_vmlTpiLtPm3TRlDAA'"
                    :albumArt="'songs/slappin/albumArt.jpg'"
                    :description="'I produced the beat, recorded and mixed the vocals, and also mastered the track. This is some of my earlier work, so the production quality isn\'t the highest, but it\'s a song I\'m still very proud of.'">
                </PastProject>
            </div>
        </div>
    </div>
</template>

<style>
#pastProjectsPage {
    display: flex;
    justify-content: center;
}

.pastProjects {
    width: 100%;
}
</style>