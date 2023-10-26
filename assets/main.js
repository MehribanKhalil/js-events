// 1
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const container = document.querySelector(".container");
// let todoInpMode=document.create

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value === "") { 
    return;
  }
  const divElementi = document.createElement("div");
  const childDiv1 = document.createElement("div");
  const trashIcn = document.createElement("div");
  const edit = document.createElement("span");

  divElementi.classList.add("divElementi");
  container.append(divElementi);
  trashIcn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  divElementi.append(childDiv1, trashIcn, edit);
  childDiv1.innerHTML = input.value;
  edit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';


  childDiv1.addEventListener("click", () =>childDiv1.classList.toggle("xett"));

  trashIcn.addEventListener("click", () => divElementi.remove());

  edit.onclick=()=>{
    input.value=childDiv1.textContent
    btn.textContent="edit"
  }

  input.value = "";
});




//FAce task
// const container =document.getElementById('container')
// const btn = document.querySelector('button')

// btn.addEventListener('click',()=>{
//     const face= document.createElement('div')
//     const eye1=document.createElement('div')
//     const eye2=document.createElement('div')
    
//     face.classList.add("face")
//     eye1.classList.add('eye1')
//     eye2.classList.add('eye2')
    
//     container.append(face)
//     face.append(eye1,eye2)

// })

// document.body.append(container)
