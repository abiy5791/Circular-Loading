 var percent = document.querySelector(".percent");
    var text = document.querySelector(".text");

    var percentcounter = 0;
    var loading = setInterval(loading, 50);

    function loading() {
      if (percentcounter == 100) {
        clearInterval(loading);
        text.style.display = "block";
      } else {

        percentcounter = percentcounter + 1;
        percent.textContent = percentcounter + "%";
      }
    }
