// const Users =document.getElementById('Users');
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => {
//     for(let d of data){
//         const div = document.createElement('div');
//         div.innerHTML =
//         `
//         <h2>${d.name}</h2>
//         `
//         Users.appendChild(div)
//     }
//   })

// const Users = document.getElementById('Users');
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     for(let d of data ){
//         const div = document.createElement('div');
//         div.innerHTML=
//         `
//         <h2>${d.name}</h2>
//         `
//         Users.appendChild(div)
//     }
// })

// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayData(data))
 

// }
// function displayData(data){
//     const  Users = document.getElementById('Users');

//     data.forEach(user => {
//         const div = document.createElement('div')
//         div.style.backgroundColor = 'tomato';
//         div.style.padding = '10px';
         
//         div.innerHTML=
//         `
//         <h2>${user.id}</h2>
//         <h2>Name: ${user.name}</h2>
//         <button onclick="LoadDetails(${user.id})">ShowDertails</button>
//         `
//         Users.appendChild(div)
//     })
  
// }
 
// const  div = document.createElement('div');
// function LoadDetails(id){
//     const Users2 = document.getElementById('Users2');
   
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res => res.json())
//     .then(data => { 
     

//         div.style.backgroundColor = 'orange';
       

//         div.innerHTML =`

//         <h2>id: ${data.id}</h2>
//         <h2>Name: ${data.name}</h2>
//         <h2>Gmail: ${data.email}</h2>
//         <h2>Phone: ${data.phone}</h2>
//         `
//         Users2.appendChild(div)
//          console.log(div);
//     })

// }


// loadData();
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData(data))
 

}
function displayData(data){
    const  Users = document.getElementById('Users');

    data.forEach(user => {
        const div = document.createElement('div')
        div.style.backgroundColor = 'tomato';
        div.style.padding = '10px';
         
        div.innerHTML=
        `
        <h2>${user.id}</h2>
        <h2>Name: ${user.name}</h2>
        <button onclick="LoadDetails(${user.id})">ShowDertails</button>
        `
        Users.appendChild(div)
    })
  
}
 
const  div = document.createElement('div');
function LoadDetails(id){
    const Users2 = document.getElementById('Users2');
   
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res => res.json())
    .then(data => { 
     

        div.style.backgroundColor = 'orange';
       

        div.innerHTML =`

        <h2>id: ${data.id}</h2>
        <h2>Name: ${data.name}</h2>
        <h2>Gmail: ${data.email}</h2>
        <h2>Phone: ${data.phone}</h2>
        `
        Users2.appendChild(div)
         console.log(div);
    })

}


loadData();