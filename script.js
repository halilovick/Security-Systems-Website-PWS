var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    530: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + "; " + expires;
}

function getCookie(name) {
  const cookieName = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

function incrementVisitCount() {
  let visitCount = getCookie("visitCount");
  visitCount = parseInt(visitCount) + 1;
  setCookie("visitCount", visitCount, 365);
}

if (getCookie("visitCount") === "") {
  setCookie("visitCount", 0, 365);
}

incrementVisitCount();

window.addEventListener("load", function () {
  const visitCount = getCookie("visitCount");
  document.getElementById("broj-posjeta").textContent = visitCount;
  setTimeout(function () {
    document.querySelector(".popup").style.display = "block";
  }, 1000); //sekundu nakon ucitavanja

  setTimeout(function () {
    document.querySelector(".popup").style.display = "none";
  }, 5000); // nakon 5 sekundi se zatvara
});
