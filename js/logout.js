console.log(HIDDEN_CLASSNAME);
console.log(LOCALSTORAGE_ITEM);

if (LOCALSTORAGE_ITEM === null) {
  logOutBtn.classList.add(HIDDEN_CLASSNAME);
}

function logOut(e) {
  alert("BYE");
  localStorage.clear();
  location.reload();
}

logOutBtn.addEventListener("click", logOut);
