
let quizHtml = '<div id="quiz">';
let names = [];
let images = [];

let theIframe = $("#ptifrmtgtframe").contents();

theIframe.find(".PSHYPERLINKDISABLED").each(function() {
    names.push($(this).text());
});

first = true
theIframe.find(".PSGROUPBOXWBO").each(function() {
    if (!first) {
        found = false;
        $(this).find(".PSIMAGE").each(function () {
            images.push($(this).attr('src'));
            found = true;
        })
        if (!found) {
            images.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkysqug-XJdJ3_8oHxn33gCcksEvKuS7-RArWgHwrpKx8SM8EKvw&s")
        }
    } else {
        first = false;
    }
});

let zipped = names.map(function(e, i) {
    return [e, images[i]];
});

let studentInfo = zipped.map(function(item, i) {
   return {
       image: item[1],
       name: item[0],
       id: i,
       learned: false,
   }
});

let id = 0;
$.each(studentInfo, function(){
    quizHtml +=
        '<div class="student" style="height:120px;width:300px;display:inline-block">' +
        '<img studentId="' + this.id + '" src="' + this.image + '" style="width:100px; height:100px"/>'+
        '<span style="background-color: black" studentId=' + this.id + '>' + this.name +
        '<form><input class="learnedCheck" type="checkbox" value="true"/>Learned</form></span></div>';
    id++;
});

quizHtml += "</div>";

quizHtml += "<div id='learned' style='1px solid'>";



quizHtml += "</div>";

let toolbar = '<div id="toolbar">' +
    '<button style="margin: 5px" id="shuffle">Shuffle</button>' +
    '</div>';

$("html").html(
    toolbar + quizHtml
);

