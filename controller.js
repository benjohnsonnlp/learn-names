$('span').mouseover(function() {
    $(this).css('background-color', 'white');
});

$('#shuffle').click(function(){
    let sampled = [];
    // adapted from https://jsfiddle.net/C6LPY/2/
    var parent = $("#quiz");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    $('span').css('background-color', 'black')
});