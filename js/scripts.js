$(document).ready(function(){
    // Update navbar status while scrolling
    $('body').scrollspy({target: ".navbar", offset: 50});   

    // Assuming you have an object with the sizes of the images
    var imageSizes = [0, 0, 4.6, 6.2, 7.7, 9, 12.4, 10.9, 16.8, 16.3, 17.4];
    
    $('#myRange').on('input change', function() {
        let value = $(this).val();
        $('#dp img').attr('src', './images/dp_' + value + '_clusters.png');
        $(this).attr('data-title', 'Size: ' + imageSizes[value] + " kB");
    });

});