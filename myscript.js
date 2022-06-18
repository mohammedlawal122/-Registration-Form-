const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);
let validEmail = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
let name = id("name"),
  lName = id("lname"),
  email = id("email"),
  pass = id("pass"),
  error = classes("error");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput(name, 0, "First Name cannot be empty");
  checkInput(lName, 1, "Last Name cannot be empty");
  checkInput(pass, 3, "Password cannot be empty");
  checkEmail(email);
});

// Checking email pattern
const checkEmail = (id) => {
  if (validEmail.test(email.value) == false) {
    animation(id);
    error[2].innerHTML = "Looks like this is not an email";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    email.style.color = "hsl(0, 100%, 74%)";
    email.style.backgroundImage = "url(../../assets/img/icon-error.svg)";
  } else {
    setTimeout(() => {
      error[2].innerHTML = "";
    }, 100);
    valid(id);
  }
};

// Checking the other inputs
const checkInput = (id, i, message) => {
  if (id.value.trim() === "") {
    animation(id);
    error[i].innerHTML = message;
    id.style.border = "2px solid hsl(0, 100%, 74%)";
    id.style.color = "hsl(0, 100%, 74%)";
    id.style.backgroundImage = "url(../../assets/img/icon-error.svg)";
  } else {
    setTimeout(() => {
      error[i].innerHTML = "";
    }, 100);
    valid(id);
  }
};

// Style if input is valid
const valid = (id) => {
  id.style.border = "2px solid hsl(154, 59%, 51%)";
  id.style.color = "initial";
  id.style.backgroundImage = "none";
};

// Animation if a input is invalid
const animation = (id) => {
  id.classList.add("error-animation");
  setTimeout(() => {
    id.classList.remove("error-animation");
  }, 200);
};

const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);
let validEmail = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
let name = id("name"),
  lName = id("lname"),
  email = id("email"),
  pass = id("pass"),
  error = classes("error");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput(name, 0, "First Name cannot be empty");
  checkInput(lName, 1, "Last Name cannot be empty");
  checkInput(pass, 3, "Password cannot be empty");
  checkEmail(email);
});

// Checking email pattern
const checkEmail = (id) => {
  if (validEmail.test(email.value) == false) {
    animation(id);
    error[2].innerHTML = "Looks like this is not an email";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    email.style.color = "hsl(0, 100%, 74%)";
    email.style.backgroundImage = "url(../../assets/img/icon-error.svg)";
  } else {
    setTimeout(() => {
      error[2].innerHTML = "";
    }, 100);
    valid(id);
  }
};

// Checking the other inputs
const checkInput = (id, i, message) => {
  if (id.value.trim() === "") {
    animation(id);
    error[i].innerHTML = message;
    id.style.border = "2px solid hsl(0, 100%, 74%)";
    id.style.color = "hsl(0, 100%, 74%)";
    id.style.backgroundImage = "url(../../assets/img/icon-error.svg)";
  } else {
    setTimeout(() => {
      error[i].innerHTML = "";
    }, 100);
    valid(id);
  }
};

// Style if input is valid
const valid = (id) => {
  id.style.border = "2px solid hsl(154, 59%, 51%)";
  id.style.color = "initial";
  id.style.backgroundImage = "none";
};

// Animation if a input is invalid
const animation = (id) => {
  id.classList.add("error-animation");
  setTimeout(() => {
    id.classList.remove("error-animation");
  }, 200);
};

const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);
let validEmail = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
let name = id("name"),
  lName = id("lname"),
  email = id("email"),
  pass = id("pass"),
  error = classes("error");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput(name, 0, "First Name cannot be empty");
  checkInput(lName, 1, "Last Name cannot be empty");
  checkInput(pass, 3, "Password cannot be empty");
  checkEmail(email);
});

// Checking email pattern
const checkEmail = (id) => {
  if (validEmail.test(email.value) == false) {
    animation(id);
    error[2].innerHTML = "Looks like this is not an email";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    email.style.color = "hsl(0, 100%, 74%)";
    email.style.backgroundImage = "url(../../assets/img/icon-error.svg)";
  } else {
    setTimeout(() => {
      error[2].innerHTML = "";
    }, 100);
    valid(id);
  }
};

// Checking the other inputs
const checkInput = (id, i, message) => {
  if (id.value.trim() === "") {
    animation(id);
    error[i].innerHTML = message;
    id.style.border = "2px solid hsl(0, 100%, 74%)";
    id.style.color = "hsl(0, 100%, 74%)";
    id.style.backgroundImage = "url(../../assets/img/icon-error.svg)";
  } else {
    setTimeout(() => {
      error[i].innerHTML = "";
    }, 100);
    valid(id);
  }
};

// Style if input is valid
const valid = (id) => {
  id.style.border = "2px solid hsl(154, 59%, 51%)";
  id.style.color = "initial";
  id.style.backgroundImage = "none";
};

// Animation if a input is invalid
const animation = (id) => {
  id.classList.add("error-animation");
  setTimeout(() => {
    id.classList.remove("error-animation");
  }, 200);
};
