function setCookie(name, value, days) {
   const d = new Date();
   d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
   document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
   let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
   return v ? v[2] : null;
}

function Lightdarktoggle() {
   const bodyElements = document.body.querySelectorAll("*");
   bodyElements.forEach(el => {
      el.classList.toggle("dark-mode");
   });
}

function ldtb() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   
   const isDark = element.classList.contains("dark-mode");
   setCookie("theme", isDark ? "dark" : "light", 365);
}

window.onload = function () {
   // 4. Load the theme preference on page load
   const savedTheme = getCookie("theme");
   if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
   }

   clock();
   function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = 'pm';
      if (sec < 10) { sec = "0" + sec; }
      if (min < 10) { min = "0" + min; }
      if (hour > 12) { hour = hour - 12; }
      if (hour < 10) { hour = "0" + hour; }
      if (hour == 0) { hour = 12; }
      if (TwentyFourHour < 12) { mid = 'am'; }
      document.getElementById('currentTime').innerHTML = hour + ':' + min + ':' + sec + ' ' + mid;
      setTimeout(clock, 1000);
   }
}
