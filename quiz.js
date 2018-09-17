
let output = '';
let names = [];
let images = [];

let theIframe = $("#ptifrmtgtframe").contents();

theIframe.find(".PSHYPERLINKDISABLED").each(function() {
    names.push($(this).text());
});
alert(names);

theIframe.find(".PSIMAGE").each(function() {
    images.push($(this).attr('src'));
});

let zipped = names.map(function(e, i) {
    return [e, images[i]];
});

$.each(zipped, function(){
    output += this[0] + '<img src="' + this[1] + '" style="width:100px; height:100px"/><br/>';
});

// theIframe.find(".PSIMAGE").each(function() {
//     output += '<img src="' + $(this).attr('src') + '"/>';
// });

$("#ptifrmtarget").html(
    output
);
