<template>
    <div id="intro" class="row d-flex align-items-center">
        <div class="col-lg-3 col-md-4 col-12">
            <figure id="dp"><img src="/src/assets/img/dp_2_clusters.png" alt=""  style="width: 100%;" /></figure>
            <input type="range" min="2" max="10" value="2" class="slider" id="myRange" style="width: 100%;" data-title="Size: 4.6 kB" />
            <div class="slider-scale">
                <span v-for="n in 9" :key="n">{{ n + 1 }}</span>
            </div>
        </div>
        <div class="col-lg-9 col-md-8 col-12">
            <p v-html="message"></p>
        </div>
    </div>
</template>

<script>
    $(document).ready(function () {
        // Assuming you have an object with the sizes of the images
        var imageSizes = [0, 0, 4.6, 6.2, 7.7, 9, 12.4, 10.9, 16.8, 16.3, 17.4];

        // Event listener for changes to the range input
        $('#myRange').on('input change', function () {
            let value = $(this).val();
            $('#dp img').attr('src', '/src/assets/img/dp_' + value + '_clusters.png');
            $(this).attr('data-title', 'Size: ' + imageSizes[value] + " kB");
        });
    });

    export default {
        data() {
            return {
                'title': 'Welcome to my Tech Space!',
                'message': `
                <b class="c1">Linus Torvalds, JFF, II:5:-1</b>: "It’s still hard to explain what can be so fascinating about beating your head against the wall for three days, not knowing how to solve something the better way, the beautiful way. But once you find that way, it’s the greatest feeling in the world." 

                <br><br>

                <b class="c1">Welcome to my tech space!</b>

                <br><br>

                I develop software because it's fun. This is a showcase of my "fun" projects, themed on <b class="c1">ML</b>, <b class="c1">AI</b>, and
                <b class="c1">Efficient Compute</b>.
                `
            }
        }
    }
</script>

<style scoped>
#intro {
	padding: 4em 0 0 0;
}

#intro h1 {
	color: grey;
}

/* The .slider class is used to style the range in intro section */
.slider {
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 10px;
	background: #d3d3d3;
	outline: none;
	opacity: 0.7;
	-webkit-transition: .2s;
	transition: opacity .2s;
	padding: 0 12px 0 3px;
}

.slider:hover {
	opacity: 1;
}

/* A slider thumb is the handle */
.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 2px;
	height: 15px;
	background: white;
	cursor: pointer;
}

.slider::-moz-range-thumb {
	width: 2px;
	height: 15px;
	background: white;
	cursor: pointer;
}

/* The .slider-scale class is used to display the slider scale */
.slider-scale {
	display: flex;
	justify-content: space-between;
	padding: 0;
}

.slider-scale span {
	position: relative;
}

/* slider tooltip when hovered shows file size */
input[type="range"]:hover::after {
  content: attr(data-title);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -110%);
  background: #000;
  color: #fff;
  padding: 2px;
  border-radius: 2px;
  white-space: nowrap;
}
</style>
