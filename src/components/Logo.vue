<template>
    <img class="logoimg" :src="`/src/assets/img/${imgSrc}`" :alt="`${alt} Logo`" >
</template>

<script>
export default {
    name: 'Logo',
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: false,
            default: 'Image'
        }
    }
}
</script>

<style scoped>
.logoimg {
    height: 2em; 
    vertical-align: middle; 
    position: fixed; 
    pointer-events: none;
    background-color: white;
    z-index: 1000;
}
</style>