// 1
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const container = document.querySelector(".container");
// 2
// const inputValue = document.querySelector('#input').value;
// console.log(inputValue);

// input.addEventListener('keypress',()=>{
//     console.log(input.value);
// })

// 3

// btn.addEventListener('click',()=>{
//     input.value=' '
// })

// 4

//5

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

  childDiv1.addEventListener("click", () => {
    childDiv1.classList.toggle("xett");
  });

  trashIcn.addEventListener("click", (e) => {
    divElementi.remove();
  });

  divElementi.append(childDiv1, trashIcn, edit);
  childDiv1.innerHTML = input.value;
  edit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

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
