document.addEventListener("DOMContentLoaded", e => {
  document.querySelector("body")
  .addEventListener("click", e => console.log("Reggae, Reggae!"));
})

// let values =document.getElementById('#hidden-div');

document.body.addEventListener('keydown',e=>{
   document.getElementById('#hidden-div')=(e.innerHtml='301')
})