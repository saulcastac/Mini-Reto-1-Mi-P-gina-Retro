function loadIndex() {
    window.location.href = "index.html";
}

function loadAbout() {
    window.location.href = "About.html";
}

function loadMembers() {
    window.location.href = "Members.html";
}

function loadDonate() {
    window.location.href = "Donate.html";
}

function loadImagen() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const objetoUrl = URL.createObjectURL(xhttp.response);
    const imgElement = document.getElementById("imagen");
    imgElement.src = objetoUrl;
    
  };
  xhttp.open("GET", "Amex.jpg");
  xhttp.responseType = "blob";
  xhttp.send();
}