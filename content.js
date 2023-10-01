console.log("content-script running");
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse){
    const div = document.querySelectorAll('div');
    const h1 = document.querySelectorAll('h1');
    const p = document.querySelectorAll('p');
    const a = document.querySelectorAll('a');
    const span = document.querySelectorAll('span');
    const img = document.querySelectorAll('img');
    const li = document.querySelectorAll('li');
    if(message.txt=="hello" && message.p==0){
      div.forEach((divs) => {
        divs.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      h1.forEach((h1s) => {

        h1s.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      p.forEach((ps) => {
        ps.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      a.forEach((as) => {;

        as.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      span.forEach((spans) => {
        spans.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      li.forEach((lis) => {
        lis.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      img.forEach((imgs) => {
        imgs.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
  
      
    }else if(message.txt=="hello" && message.p==1){
      div.forEach((divs) => {
        const computedStyle = window.getComputedStyle(divs);
        const height = computedStyle.getPropertyValue("height");
const width = computedStyle.getPropertyValue("width");
const heightTextNode = document.createTextNode(` ${height}*`);
const widthTextNode = document.createTextNode(`${width}`);
divs.appendChild(heightTextNode);
divs.appendChild(widthTextNode);
        divs.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;

      });
    

      h1.forEach((h1s) => {
//         const computedStyle = window.getComputedStyle(h1s);
//         const height = computedStyle.getPropertyValue("height");
// const width = computedStyle.getPropertyValue("width");
// const heightTextNode = document.createTextNode(` ${height}*`);
// const widthTextNode = document.createTextNode(`${width}`);
// h1s.appendChild(heightTextNode);
// h1s.appendChild(widthTextNode);
//         h1s.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
 
      p.forEach((ps) => {
//         const computedStyle = window.getComputedStyle(ps);
//         const height = computedStyle.getPropertyValue("height");
// const width = computedStyle.getPropertyValue("width");
// const heightTextNode = document.createTextNode(` ${height}*`);
// const widthTextNode = document.createTextNode(`${width}`);
// ps.appendChild(heightTextNode);
// ps.appendChild(widthTextNode);
        // ps.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
       
      });
    

      a.forEach((as) => {;
//         const computedStyle = window.getComputedStyle(as);
//         const height = computedStyle.getPropertyValue("height");
// const width = computedStyle.getPropertyValue("width");
// const heightTextNode = document.createTextNode(` ${height}*`);
// const widthTextNode = document.createTextNode(`${width}`);
// as.appendChild(heightTextNode);
// as.appendChild(widthTextNode);
        // as.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });

      span.forEach((spans) => {
        const computedStyle = window.getComputedStyle(spans);
        const height = computedStyle.getPropertyValue("height");
const width = computedStyle.getPropertyValue("width");
const heightTextNode = document.createTextNode(` ${height}*`);
const widthTextNode = document.createTextNode(`${width}`);
spans.appendChild(heightTextNode);
spans.appendChild(widthTextNode);
        spans.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });

      li.forEach((lis) => {
//         const computedStyle = window.getComputedStyle(lis);
//         const height = computedStyle.getPropertyValue("height");
// const width = computedStyle.getPropertyValue("width");
// const heightTextNode = document.createTextNode(` ${height}*`);
// const widthTextNode = document.createTextNode(`${width}`);
// lis.appendChild(heightTextNode);
// lis.appendChild(widthTextNode);
        // lis.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });

      img.forEach((imgs) => {
        const computedStyle = window.getComputedStyle(imgs);
        const height = computedStyle.getPropertyValue("height");
const width = computedStyle.getPropertyValue("width");
const heightTextNode = document.createTextNode(` ${height}`);
const widthTextNode = document.createTextNode(`${width}`);
imgs.appendChild(heightTextNode);
imgs.appendChild(widthTextNode);
        imgs.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
  
    }else if(message.txt=="hello" && message.p==2){
      div.forEach((divs) => {
const computedStyle = window.getComputedStyle(divs);
const bgColor = computedStyle.getPropertyValue("background-color");
const bgColorTextNode = document.createTextNode(`${bgColor}`);
divs.appendChild(bgColorTextNode);
        divs.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;

      });
      h1.forEach((h1s) => {
        const computedStyle = window.getComputedStyle(h1s);
        const bgColor = computedStyle.getPropertyValue("color");
        const bgColorTextNode = document.createTextNode(`${bgColor}`);
        h1s.appendChild(bgColorTextNode);
        h1s.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      p.forEach((ps) => {
        const computedStyle = window.getComputedStyle(ps);
        const bgColor = computedStyle.getPropertyValue("color");
        const bgColorTextNode = document.createTextNode(`${bgColor}`);
        ps.appendChild(bgColorTextNode);
        ps.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      a.forEach((as) => {;
        const computedStyle = window.getComputedStyle(as);
        const bgColor = computedStyle.getPropertyValue("color");
        const bgColorTextNode = document.createTextNode(`${bgColor}`);
        as.appendChild(bgColorTextNode);
        as.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      span.forEach((spans) => {
        const computedStyle = window.getComputedStyle(spans);
        const bgColor = computedStyle.getPropertyValue("background-color");
        const bgColorTextNode = document.createTextNode(`${bgColor}`);
        spans.appendChild(bgColorTextNode);
        spans.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      li.forEach((lis) => {
        const computedStyle = window.getComputedStyle(lis);
        const bgColor = computedStyle.getPropertyValue("color");
        const bgColorTextNode = document.createTextNode(`${bgColor}`);
        lis.appendChild(bgColorTextNode);
        lis.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      img.forEach((imgs) => {
        imgs.style.border = `2px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
    }else if(message.link=="https://devdiv-web.netlify.app/"){

      console.log("kdnfklndf");
      window.location.href = "https://devdiv-web.netlify.app/";
    }
    else
    {
      div.forEach((divs) => {
        divs.style.backgroundColor = message.c1;
      });
      h1.forEach((h1s) => {
        h1s.style.backgroundColor = message.c4;
      });
      p.forEach((ps) => {
        ps.style.color = message.c3;
      });
      a.forEach((as) => {
        as.style.backgroundColor = message.c2;
      });
      span.forEach((spans) => {
        spans.style.border = message.c5;
      });
      li.forEach((lis) => {
        lis.style.border = message.c6;
      });
      img.forEach((imgs) => {
        imgs.style.border = message.c7;
      }); 
  }
    }

