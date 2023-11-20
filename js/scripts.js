$(document).ready(function () {
    // Update navbar status while scrolling
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Assuming you have an object with the sizes of the images
    var imageSizes = [0, 0, 4.6, 6.2, 7.7, 9, 12.4, 10.9, 16.8, 16.3, 17.4];

    // Event listener for changes to the range input
    $('#myRange').on('input change', function () {
        let value = $(this).val();
        $('#dp img').attr('src', './images/dp_' + value + '_clusters.png');
        $(this).attr('data-title', 'Size: ' + imageSizes[value] + " kB");
    });

    // var contents = ['Content 1', 'Content 2', 'Content 3']; // Replace this with your actual contents
    // var currentIndex = 0;

    // function updateContent(direction) {
    //     if (direction === 'left' && currentIndex > 0) {
    //         currentIndex--;
    //     } else if (direction === 'right' && currentIndex < contents.length - 1) {
    //         currentIndex++;
    //     }

    //     document.getElementById('section1').innerHTML = contents[currentIndex];
    // }
});