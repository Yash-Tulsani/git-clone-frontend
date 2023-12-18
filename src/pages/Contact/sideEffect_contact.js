function getFocus(e) {
    let span = document.getElementById("s-name-contact");
    let label = document.getElementById("l-name-contact");
    let element = document.getElementById(e.target.id);
    if (element.style.color !== "white") {
      label.style.visibility = "hidden";
      span.style.background = " #1abc9c";
      span.style.color = " white";
      // element.style.border = "2px solid red";
    }
  }
  
  
  function getBlur(e) {
    let element = document.getElementById(e.target.id);
    let span = document.getElementById("s-name-contact");
    let label = document.getElementById("l-name-contact");
  
    if (element.style.color === "white" && e.target.value === "") {
      label.style.visibility = "visible";
      span.style.color = " transparent";
      span.style.background = "";
      element.style.border = "2px solid #fafafa";
    }
  }
  function getFocus1(e) {
    let span = document.getElementById("s-phone-contact");
    let label = document.getElementById("l-phone-contact");
    let element = document.getElementById(e.target.id);
    if (element.style.color !== "white") {
      label.style.visibility = "hidden";
      span.style.background = " #1abc9c";
      span.style.color = " white";
      // element.style.border = "2px solid red";
    }
  }
  function getBlur1(e) {
    let element = document.getElementById(e.target.id);
    let span = document.getElementById("s-phone-contact");
    let label = document.getElementById("l-phone-contact");
  
    if (element.style.color === "white" && e.target.value === "") {
      label.style.visibility = "visible";
      span.style.color = " transparent";
      span.style.background = "";
      element.style.border = "2px solid #fafafa";
    }
  }
  function getFocus2(e) {
    let span = document.getElementById("s-email-contact");
    let label = document.getElementById("l-email-contact");
    let element = document.getElementById(e.target.id);
    if (element.style.color !== "white") {
      label.style.visibility = "hidden";
      span.style.background = " #1abc9c";
      span.style.color = " white";
      // element.style.border = "2px solid red";
    }
  }
  function getBlur2(e) {
    let element = document.getElementById(e.target.id);
    let span = document.getElementById("s-email-contact");
    let label = document.getElementById("l-email-contact");
  
    if (element.style.color === "white" && e.target.value === "") {
      label.style.visibility = "visible";
      span.style.color = " transparent";
      span.style.background = "";
      element.style.border = "2px solid #fafafa";
    }
  }
  function getFocus3(e) {
    let span = document.getElementById("s-message-contact");
    let label = document.getElementById("l-message-contact");
    let element = document.getElementById(e.target.id);
    if (element.style.color !== "white") {
      label.style.visibility = "hidden";
      span.style.background = " #1abc9c";
      span.style.color = "white";
      // element.style.border = "2px solid red";
    }
  }
  function getBlur3(e) {
    let element = document.getElementById(e.target.id);
    let span = document.getElementById("s-message-contact");
    let label = document.getElementById("l-message-contact");
  
    if (element.style.color === "white" && e.target.value === "") {
      label.style.visibility = "visible";
      span.style.color = " transparent";
      span.style.background = "";
      element.style.border = "2px solid #fafafa";
    }
  }
  
  export {getFocus, getBlur ,getFocus1,getBlur1 ,getFocus2,getBlur2,getFocus3,getBlur3};
  