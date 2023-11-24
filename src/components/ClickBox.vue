<template>
    <div class="border rounded px-1 d-inline-block"  
        :class="{ 'shadow': shadow }"
         @mouseover="showLogo = true" 
         @mouseleave="showLogo = false" 
         @mousemove="updatePosition" @click="toggleShadow">
        <slot></slot>
    </div>
    <Logo v-if="showLogo && imgSrc" 
          :imgSrc="imgSrc" 
          :alt="alt" 
          :style="{ top: position.y + 'px', left: position.x + 'px' }" />
</template>

<script>
import Logo from './Logo.vue';

export default {
    name: 'ClickBox',
    components: {
        Logo
    },
    props: {
        imgSrc: {
            type: String,
            required: false
        },
        alt: {
            type: String,
            required: false,
            default: 'Image'
        }
    },
    data() {
        return {
            showLogo: false,
            position: {
                x: 0,
                y: 0
            },
            shadow: true
        };
    },
    methods: {
        updatePosition(event) {
            this.position.x = event.clientX + 15;
            this.position.y = event.clientY + 8;
        },
        toggleShadow() {
            this.shadow = !this.shadow;
            setTimeout(() => {
                this.shadow = !this.shadow;
            }, 200);
        }
    }
}
</script>

<style scoped>
.border {
    border-width: 1px !important;
    cursor: pointer;
}
.shadow {
    box-shadow: 2px 2px 0px 0px white !important;
    transform: translate(-2px, -2px);
    transition: transform 0s ease-in-out;
}
</style>