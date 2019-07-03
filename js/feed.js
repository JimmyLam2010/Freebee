var feeds = new Array;
var feedActions = new Array;
var actionStatus = false;

for(i=1;i<=4;i++){
    var feed = document.getElementById("feed"+i);
    var feedAction = document.getElementById("feed_action"+i);

    // console.log(feed);
    // console.log(feedAction);

    feeds.push(feed);
    feedActions.push(feedAction);
}

function expand(x){
    if(!actionStatus){
        feedActions[x-1].style.width = "1.2rem";
        actionStatus = true;
    } else{
        feedActions[x-1].style.width = "0";
        actionStatus = false;
    }
}