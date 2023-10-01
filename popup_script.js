//GRABBING IMPORTANT IDS
const devdiv = document.getElementById("devdiv");
const devdiv1 = document.getElementById("devdiv1");
const devdiv2 = document.getElementById("devdiv2");
const devdiv3 = document.getElementById("devdiv3");
const devdiv4 = document.getElementById("devdiv4");

//LINK FOR devDivweb
var q="https://devdiv-web.netlify.app/";

// ADDING EVENT LISTENERS
devdiv.addEventListener("click", function () {
    let params={
        active:true,
        currentWindow:true
    }
    chrome.tabs.query(params,gotTabs);
  function gotTabs(tabs) {
    let msg = {
      p:0
    };
    chrome.tabs.sendMessage(tabs[0].id, msg);
  }
});
devdiv1.addEventListener("click", function () {
    let params={
        active:true,
        currentWindow:true
    }
    chrome.tabs.query(params,gotTabs);
  function gotTabs(tabs) {
      //MAKING THE ELEMENT'S DISPLAY AS BLOCK TO ALLOW THE TABLE CONTENTS TO BE VISIBLE
    document.getElementById("span1").style.display="block";
    document.getElementById("span2").style.display="block";
    document.getElementById("span3").style.display="block";
    document.getElementById("span4").style.display="block";
    document.getElementById("span5").style.display="block";
    document.getElementById("span6").style.display="block";
    document.getElementById("span7").style.display="block";
    document.getElementById("table_1").style.display="block";

      //GENERATING RANDOM COLORS 
    var c1=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    var c2=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    var c3=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    var c4=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    var c5=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    var c6=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    var c7=`#${Math.floor(Math.random()*16777215).toString(16)}`;

      //ADDING COLOR NAMES TO TABLE
    document.getElementById("c1_1").innerHTML=`${c1}`;
    document.getElementById("c2_1").innerHTML=`${c2}`;
    document.getElementById("c3_1").innerHTML=`${c3}`;
    document.getElementById("c4_1").innerHTML=`${c4}`;
    document.getElementById("c5_1").innerHTML=`${c5}`;
    document.getElementById("c6_1").innerHTML=`${c6}`;
    document.getElementById("c7_1").innerHTML=`${c7}`;

      //ADDING COLORED DIV TO TABLE FOR COLOR VISIBILITY TO THE USER
    document.getElementById("c1_2").style.backgroundColor=`${c1}`;
    document.getElementById("c2_2").style.backgroundColor=`${c2}`;
    document.getElementById("c3_2").style.backgroundColor=`${c3}`;
    document.getElementById("c4_2").style.backgroundColor=`${c4}`;
    document.getElementById("c5_2").style.backgroundColor=`${c5}`;
    document.getElementById("c6_2").style.backgroundColor=`${c6}`;
    document.getElementById("c7_2").style.backgroundColor=`${c7}`;

  
    let msg1 = {
      txt: "hello1",
      c1:c1,
      c2:c2,
      c3:c3,
      c4:c4,
      c5:c5,
      c6:c6,
      c7:c7
    };
    chrome.tabs.sendMessage(tabs[0].id, msg1);
  }
});

devdiv2.addEventListener("click", function () {
  let params={
      active:true,
      currentWindow:true
  }
  chrome.tabs.query(params,gotTabs);
function gotTabs(tabs) {
  let msg = {
    txt: "hello",
    p:1
  };
  chrome.tabs.sendMessage(tabs[0].id, msg);
}
});

devdiv3.addEventListener("click", function () {
  let params={
      active:true,
      currentWindow:true
  }
  chrome.tabs.query(params,gotTabs);
function gotTabs(tabs) {
  let msg = {
    txt: "hello",
    p:2
  };
  chrome.tabs.sendMessage(tabs[0].id, msg);
}
});

devdiv4.addEventListener("click", function () {
  let params={
      active:true,
      currentWindow:true
  }
  chrome.tabs.query(params,gotTabs);
function gotTabs(tabs) {
  let msg = {
    txt: "hello",
    link:q,                            //ADDING q TO LINK 
    p:5
  };
  chrome.tabs.sendMessage(tabs[0].id, msg);
}
});
