<template>
    <div id="footer" class="row">
        <!-- <div class="text-center center-block"> -->
            <!-- <a href="https://www.github.com/karthic25"> -->
                <i id="social-gh" class="fas fa-github-square fa-3x"></i>
            <!-- </a> -->
            <!-- <a href="https://www.linkedin.com/in/karthicp/"> -->
                <i id="social-li"
                    class="fa fa-linkedin-square fa-3x"></i>
                <!-- </a>
            <a href="http://home.iitk.ac.in/~pkarthic"> -->
                <i id="social-hp" class="fa fa-globe fa-3x"></i>
            <!-- </a>
            <a href="mailto:karthic2507@gmail.com"> -->
                <i id="social-em" class="fa fa-envelope-square fa-3x"></i>
            <!-- </a> -->
        <!-- </div> -->
    </div>
</template>

<style scoped>
/* Footer icons */
/* The .social class is used to scale the footer icons and apply a transition duration */
.social {
	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	-o-transform: scale(0.8);
	-webkit-transition-duration: 0.5s;
	-moz-transition-duration: 0.5s;
	-o-transition-duration: 0.5s;
}

/* The hover state of the footer icons is colored differently */
#social-gh:hover {
	color: white;
}

#social-li:hover {
	color: #0276b3;
}

#social-hp:hover {
	color: #d34836;
}

#social-em:hover {
	color: #f39c12;
}
</style>
