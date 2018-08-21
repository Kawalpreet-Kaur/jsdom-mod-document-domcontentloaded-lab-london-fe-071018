document.addEventListener("DOMContentLoaded", e => {
  document.querySelector("body")
  .addEventListener("click", e => console.log("Reggae, Reggae!"));
})

let values =document.getElementById('hidden-div');

values.addEventListener('keydown',e=>{
   (e.innerHtml='301')
  
})