//Computer Nav Switch Animation
window.onload = function () {
  initialiseNav = document.querySelectorAll(".Nav");
  initialiseSecondNav = document.querySelectorAll(".Scrolled");
  initialiseNav.forEach(element => {
    element.style.opacity = 1;
  });
  initialiseSecondNav.forEach(element => {
    element.style.opacity = 0;
  });
}
window.onscroll = switchNav;
function switchNav() {
  let nav1 = document.querySelectorAll(".Nav")
  let secondNav1 = document.querySelectorAll(".Scrolled")

  if (window.pageYOffset > 150) {
    nav1.forEach(element => {
      fadeOut(element)
      element.style.position = "fixed";
      element.style.height = "0px";
      element.style.width = "0px";
      element.style.left = "10000px";
    });

    secondNav1.forEach(element => {
      element.style.height = "90%"
      element.style.position = "static"
      element.style.marginRight = "4vw"
      element.style.left = "100px"
      element.style.width = "50%"
      fadeIn(element)


    });
  }
  else if (window.pageYOffset < 150) {
    nav1.forEach(element => {
      element.style.position = "static";
      element.style.height = "5vh";
      element.style.width = "100%";
      fadeIn(element)


    });

    secondNav1.forEach(element => {
      fadeOut(element)
      element.style.position = "fixed";
      element.style.height = "0px";
      element.style.width = "0px";
      element.style.left = "10000px";
    });
  }
}
function fadeOut(element) {
  let opacity = Number(element.style.opacity)
  let time = setInterval(function () {
    if (opacity > 0) {
      opacity = opacity - 0.1;
      element.style.opacity = opacity
    }
    else {
      clearInterval(time);

    }
  }, 50)
}
function fadeIn(element) {
  let opacity2 = Number(element.style.opacity)
  let time2 = setInterval(function () {
    if (opacity2 < 1) {
      opacity2 = opacity2 + 0.1;
      element.style.opacity = opacity2
    }
    else {
      clearInterval(time2);
    }
  }, 50)
}
//Form Submit Pop-Up
function popUp() {
  let submitButton = document.querySelectorAll(".submit")
  let submitPopUp = document.getElementById("popUpBackground")
  let submitContent = document.getElementById("popUpContent")
  let form = document.getElementById("survey-form")
  submitPopUp.style.height = "100%"
  submitPopUp.style.width = "100%"
  submitPopUp.style.backdropFilter = "blur(3px)"
  submitContent.style.visibility = "visible"
  event.preventDefault();
  form.reset()
  location.href = "#";

}

function exit() {
  let submitButton = document.querySelectorAll(".submit")
  let submitPopUp = document.getElementById("popUpBackground")
  let submitContent = document.getElementById("popUpContent")
  submitPopUp.style.height = "0%"
  submitPopUp.style.width = "0%"
  submitPopUp.style.backdropFilter = "none"
  submitContent.style.visibility = "hidden"
}





