<template>
    <div class="row" id="projects">
        <div class="col-12">
            <button @click="prev" :disabled="currentProjectIndex === 0">Prev</button>
            <button @click="next" :disabled="currentProjectIndex === projects.length - 1">Next</button>

            <component :is="projects[currentProjectIndex]" />
        </div>
    </div>
</template>

<script>
import Project1 from './Project1.vue';
import Project2 from './Project2.vue';
import Project3 from './Project3.vue';

export default {
    components: {
        Project1,
        Project2,
        Project3
    },
    data() {
        return {
            projects: ['Project1', 'Project2', 'Project3'],
            currentProjectIndex: 0
        };
    },
    methods: {
        next() {
            if (this.currentProjectIndex < this.projects.length - 1) {
                this.currentProjectIndex++;
            }
        },
        prev() {
            if (this.currentProjectIndex > 0) {
                this.currentProjectIndex--;
            }
        }
    }
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>