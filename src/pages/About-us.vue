<template>
    <div class="responsive-container">
        <div class="max-w-2xl px-4 sm:px-16 mx-auto flex items-center flex-col space-y-4">
            <div class="space-y-2 py-8">
                <h1 class="text-center font-semibold">About Dropzey</h1>
                <p class="text-t16 text-center font-normal">
                    Dropzey is a revolutionary platform in the crypto space, aimed at simplifying access to airdrops, token distributions, and blockchain opportunities.
                </p>
            </div>
        </div>
        <div class="py-4">
            <h2 class="text-t24 font-semibold">Our Mission</h2>
            <p class="text-t16">
                Our mission is to democratize access to blockchain projects, making it easier for users to participate in airdrops, token distributions, and giveaways. We strive to be the bridge that connects crypto enthusiasts with innovative projects, allowing them to explore, engage, and benefit from the expanding world of digital assets.
            </p>
        </div>
        <div class="py-4">
            <h2 class="text-t24 font-semibold">Our Vision</h2>
            <p class="text-t16">
                At Dropzey, we envision a future where everyone can actively participate in the crypto ecosystem without barriers. We aim to be the go-to platform for discovering, participating, and learning about new blockchain projects, fostering a community-driven space for innovation, inclusion, and value creation.
            </p>
        </div>
        <div class="py-4">
            <h2 class="text-t24 font-semibold">Our Values</h2>
            <p class="text-t16">
                Transparency, accessibility, and user-centricity are the core values that drive us. We prioritize the user experience and operate with complete transparency to build trust among our users and the crypto community. Our commitment to fairness and accessibility underpins every aspect of Dropzey.
            </p>
        </div>
        <div class="py-4">
            <h2 class="text-t24 font-semibold">Why Dropzey?</h2>
            <p class="text-t16">
                Dropzey is designed to make crypto participation hassle-free and rewarding. We curate a diverse range of airdrops, provide comprehensive project details, and ensure a seamless user experience. With us, discover new projects, earn rewards, and engage with the vibrant crypto community.
            </p>
        </div>
        <div class="py-4">
            <h2 class="text-t24 font-semibold">Join Us</h2>
            <p class="text-t16">
                Join Dropzey today to start exploring a world of opportunities in the crypto space. Unlock access to airdrops, giveaways, and exciting blockchain projects. Be part of a community that shares your passion for innovation, technology, and decentralized finance.
            </p>
        </div>
    </div>
    <Footer />
</template>
<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.responsive-container {
    /* Default styles for all screen sizes */
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
    /* Adjust padding as needed */

    /* Responsive adjustments */
    @media screen and (min-width: 640px) {
        padding: 4rem;
        /* Adjust padding for medium screens and above */
    }

    @media screen and (min-width: 1024px) {
        padding: 6rem;
        /* Adjust padding for large screens and above */
    }
}</style>