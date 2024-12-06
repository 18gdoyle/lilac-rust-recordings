<template>
    <footer class="footer">
        <div class="footer-content">
            <p class="footer-text">&copy; 2024 Lilac Rust. All Rights Reserved.</p>
            <div class="footer-social">
                <a href="https://www.tiktok.com/@lilac_rust" class="social-link" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-tiktok"></i>
                </a>
                <a href="https://www.instagram.com/lilac_rust_music/" class="social-link" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:lilac.rust@gmail.com" class="social-link" target="_blank" rel="noopener noreferrer">
                    <i class="fa-regular fa-envelope"></i>
                </a>
                <a href="https://www.youtube.com/@lilacrust" class="social-link" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://open.spotify.com/artist/1YT4RD3frRo0r9jVY9mBB5?si=jTH5pF9NRJKeDGDx5sNNuw" class="social-link" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-spotify"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
/* Footer styling */
.footer {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 20px 0;
    text-align: center;
    position: relative;
    height: 150px;
}

.footer-content {
    margin: 0 auto;
}

.footer-text {
    font-size: 14px;
    margin-bottom: 10px;
}

.footer-nav {
    margin-bottom: 10px;
}

.footer-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.footer-link {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: color 0.3s ease;
}

.footer-link:hover {
    color: rgb(215, 151, 233);
}

.footer-social {
    margin-top: 10px;
    width: 100%;
}

.social-link {
    font-size: 40px;
    color: #fff;
    margin: 0 20px;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: rgb(215, 151, 233);
}

@media only screen and (max-width: 768px) {
    .social-link {
        font-size: 30px;
        margin: 0 15px;
    }
}

</style>