<script>
    import ClickBox from './ClickBox.vue';

    export default {
        components: {
            ClickBox
        }
    }
</script>

<template>
    <div id="experience" class="row">
        <div class="col-12">
            <h2 class="c7">Experience</h2>
            <ul>
                <li>> <b class="c1">MS, Computational Data Analytics</b> @ <ClickBox imgSrc="gt.png" alt="GT">Georgia Tech</ClickBox>
                    (2023-)
                </li>
                <li>> <b class="c1">SDE in Machine Learning</b> @
                    <ClickBox imgSrc="amd.svg" alt="AMD">AMD</ClickBox>, <ClickBox imgSrc="xilinx.png" alt="Xilinx">Xilinx</ClickBox>
                    (2020-2023)
                </li>
                <li>> <b class="c1">B.Tech, Biological Sc. and Bioengineering</b> @ <ClickBox imgSrc="iitk.png" alt="IITK" >IIT Kanpur</ClickBox>
                    (2016-2020)
                    <ul>
                        <li>>> Tools for Cognitive Development, <b class="c5">Lab of Neural Systems</b>, Prof. Nitin Gupta
                        </li>
                        <li>>> Full-Stack Dev, <b class="c5">Sanzorgo</b>, Startup Incubated at IITK
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    #experience ul {
        list-style-type: none;
    }
    #experience li {
        margin-bottom: 0.5em;
    }
    #experience li > ul {
        margin-left: 1em;
    }
    #experience li > ul > li {
        margin-bottom: 0em;
    }
</style>
