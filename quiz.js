
let output = '';
let names = [];
let images = [];

let theIframe = $("#ptifrmtgtframe").contents();

theIframe.find(".PSHYPERLINKDISABLED").each(function() {
    names.push($(this).text());
});

theIframe.find(".PSIMAGE").each(function() {
    images.push($(this).attr('src'));
});

let zipped = names.map(function(e, i) {
    return [e, images[i]];
});

let id = 0;
$.each(zipped, function(){
    output += '<img studentId=\' + id + \' src="' + this[1] + '" style="width:100px; height:100px"/>'+
        '<span style="background-color: black" studentId=' + id + '>' + this[0] + '</span>' +
        '<br/>';
    id++;

});

$("html").html(
    output
);

