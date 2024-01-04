onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 3000);
};

setTimeout(()=> {
	document.getElementById("wishes").innerHTML = '"May your birthday be as bright, cheery and full of life as these fragrant blooms."'
  document.getElementById("wishes").style.display = "block";
  }, 5500)