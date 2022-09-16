//GLOBAL VARIABLES
let website1 = document.getElementById('website1');
let website2 = document.getElementById('website2');
let compOne = 0;
let compTwo = 0;
let compDiff;
let topViews = [0,0,0,0,0];
let blueInt;
let redInt; 

const compareBtn = document.getElementById('compareBtn');
let winBanner=(view, url)=>{
    if (compOne > compTwo){
        // blueInt=setInterval(blueDrop, 500);
        topFiveFunc(view, url);
    } else if(compTwo > compOne){
        // redInt=setInterval(redDrop, 500);
        topFiveFunc(view, url);
    }
}

let countFunc=()=>{
    $.getJSON("https://api.countapi.xyz/hit/" + website1.value + "/visits", function (response) {
    $("#visits").text('Views: ' + response.value);
    $( ".test-1" ).attr( "src", function() {
        console.log('first add image func');
        return "https://logo.clearbit.com/" + website1.value;      
      });
    compOne = response.value;
    winBanner(response.value, website1);
    });
}
   
let countFuncTwo=()=>{
    $.getJSON("https://api.countapi.xyz/hit/" + website2.value + "/visits?", function (response) {
    $("#visits2").text('Views: ' + response.value);
    $( ".test-2" ).attr( "src", function() {
        console.log('second add image func');
        return "https://logo.clearbit.com/" + website2.value;
      });    
    compTwo = response.value;
    winBanner(response.value, website2);
    });
}
    
let topFiveFunc=(view, url)=>{
    //Possible FOR loop instead to shorten code
    if(view > topViews[0]){
        topViews.splice(0,0,view);
    } else if(view > topViews[1]){
        topViews.splice(1,0,view);
    } else if(view > topViews[2]){
        topViews.splice(2,0,view);
    } else if(view > topViews[3]){
        topViews.splice(3,0,view);
    } else if(view > topViews[4]){
        topViews.splice(4,0,view);
    } 
    $('#spot-1').text(topViews[0]);
    $('#spot-2').text(topViews[1]);
    $('#spot-3').text(topViews[2]);
    $('#spot-4').text(topViews[3]);
    $('#spot-5').text(topViews[4]);
    
    url.value = "";
}

//DROP DOWN WIN BANNERS
let topIncr = -100;
let blueDrop = () =>{
    if(topIncr < 400){
        topIncr = topIncr + 25;
    };
    return $('.blueWins').css('top', topIncr + "px");
};

let redDrop = () =>{
    if(topIncr < 400){
        topIncr = topIncr + 25;
    };
    return $('.redWins').css('top', topIncr + "px");
};

let resetWinner = () =>{
    clearInterval(blueInt, redInt);
    return topIncr = -100;
    
};






