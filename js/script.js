  var i = 0;
  var write = false;
  var txt = 'Juanfran Tomás Planells';
  var txtdesc = "I'm a student of Software Engineering at the UPV and fan of new technologies"
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("name").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      	i=0;
    	typeDescWriter();
    }
  }
  function typeDescWriter() {
    if (i < txtdesc.length) {
      document.getElementById("desc").innerHTML += txtdesc.charAt(i);
      i++;
      setTimeout(typeDescWriter, speed-30);
    }else{
    	i=5;
      	typeImgWriter();
    }
  }
  function typeImgWriter() {
    if (i > 0) {
      document.getElementById("img"+i).style.display = "inline";
      i--;
      setTimeout(typeImgWriter, 200);
    }else{
      document.getElementById("blog").classList.add("bounce");
      document.getElementById("blog").classList.add("animated");
      document.getElementById("blog").classList.add("infinite");
      
    } 
  }
  typeWriter();