const toggleButton = document.getElementById('menu-toggle');
const ulList = document.querySelector('.ul-list');

toggleButton?.addEventListener('click', () => {
  ulList.classList.toggle('show');
});




const hideshow1= ()=>{
  console.log(document.getElementById('physician1_box').style.display)
  document.getElementById('physician1_box').style.display = "none" 
}


const hideshow= ()=>{
  console.log(document.getElementById('physician1_box').style.display)
  document.getElementById('physician1_box').style.display = "block" 
}


const hideshow2= ()=>{
  console.log(document.getElementById('physician1_box').style.display)
  document.getElementById('physician1_box').style.display = "none" ;
  document.getElementById('physician1_box2').style.display = "block" ;

  
}


