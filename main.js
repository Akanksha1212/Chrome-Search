var noTextError = new Error('You must highlight a text in order to search!'); 

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

var searchGoogle = function(word){
    var query = word.selectionText;
    if (query != undefined){
        chrome.tabs.query({
    active: true,
    currentWindow: true
    }, function(tabs) {        
    chrome.tabs.create({url: "https://www.google.com/search?q=" + query});}
    });
        
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


