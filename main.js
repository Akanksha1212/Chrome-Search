var noTextError = new Error('You must highlight a text in order to search!'); 

var searchGoogle = function(word){
    var query = word.selectionText;
    if (query != undefined){chrome.tabs.create({url: "https://www.google.com/search?q=" + query});}
    else{alert('Highlight a text in order to search!');}
};

chrome.runtime.onInstalled.addListener
(
    function() 
    {

        chrome.contextMenus.create({
            "title": "Look up",
            "contexts": ["all"],
            "onclick": searchGoogle
        });


 });


