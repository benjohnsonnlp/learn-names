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
    $('.quiz span').css('background-color', 'black')
});

$('.learnedCheck').click(function(){
    let student = $(this).closest(".student");
    if ($(this).prop("checked")) {
        student.detach().appendTo('#learned');
    } else {
        student.detach().appendTo('#quiz');
    }
});