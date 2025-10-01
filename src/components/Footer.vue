<script setup>
import SocialLinks from '@/components/SocialLinks.vue';
</script>
<template>
    <footer class="footer">
        <div class="footer-content">
            <p class="footer-text">&copy; 2025 Lilac Rust. All Rights Reserved.</p>
            <div class="footer-social">
                <SocialLinks></SocialLinks>
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
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 20px 0;
    text-align: center;
    position: relative;
    height: 150px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
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
    transition: all 0.3s;
}

.footer-link:hover {
    color: rgb(215, 151, 233);
    transform: scale(120%);
}

.footer-social {
    margin-top: 10px;
    width: 100%;
}
</style>