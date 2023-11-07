function validateSuggestForm() {
  var getDocuments = document.forms["suggestForm"]["email"].value;
  if (getDocuments == "" || getDocuments == null) {
    alert("Email must be filled out");
    return false;
  }
}

function homepage() {
  document.getElementById("home").style.background = "orange";
  document.getElementById("about").style.background = "none";
  document.getElementById("certificate").style.background = "none";
  document.getElementById("portfolio").style.background = "none";
  document.getElementById("suggestion").style.background = "none";
  document.getElementById("contact").style.background = "none";
}

function about() {
  document.getElementById("home").style.background = "none";
  document.getElementById("about").style.background = "orange";
  document.getElementById("certificate").style.background = "none";
  document.getElementById("portfolio").style.background = "none";
  document.getElementById("suggestion").style.background = "none";
  document.getElementById("contact").style.background = "none";
}

function certificate() {
  document.getElementById("home").style.background = "none";
  document.getElementById("about").style.background = "none";
  document.getElementById("certificate").style.background = "orange";
  document.getElementById("portfolio").style.background = "none";
  document.getElementById("suggestion").style.background = "none";
  document.getElementById("contact").style.background = "none";
}

function portfolio() {
  document.getElementById("home").style.background = "none";
  document.getElementById("about").style.background = "none";
  document.getElementById("certificate").style.background = "none";
  document.getElementById("portfolio").style.background = "orange";
  document.getElementById("suggestion").style.background = "none";
  document.getElementById("contact").style.background = "none";
}

function suggestion() {
  document.getElementById("home").style.background = "none";
  document.getElementById("about").style.background = "none";
  document.getElementById("certificate").style.background = "none";
  document.getElementById("portfolio").style.background = "none";
  document.getElementById("suggestion").style.background = "orange";
  document.getElementById("contact").style.background = "none";
}
