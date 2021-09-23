const f = document.getElementById('form');
      const q = document.getElementById('query');
      const google = 'https://www.google.com/search?q=site%3A+';
      const site = 'tokolava.github.io';

      function submitted(event) {
        event.preventDefault();
        const url = site + '+' + q.value;
        const win = location.replace(url, '_blank');
        win.focus();
      }

      f.addEventListener('submit', submitted);
      function sidebar(){
        const tan = document.querySelector("sidebar");
        if(tan.style.display("none"){
            tan.style.display("block");
      }
        else {
            tan.style.display("none");
      }
}
