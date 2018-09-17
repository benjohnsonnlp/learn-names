
let showQuiz = document.getElementById('show');
showQuiz.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript({ file: "jquery.js" }, function() {
            chrome.tabs.executeScript(
                {file: 'quiz.js'}, function() {
                chrome.tabs.executeScript(
                    {file: 'controller.js'})
            })
        });
    });
};