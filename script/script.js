// const checkUser = () => {
//     fetch('/api/user')
//         .then(res => res.json())
//         .then(data => {
//             data.map(user => {user.name = user.name.toString()})
//         })
//   const user = localStorage.getItem('user');
//   if (user) {
//     return JSON.parse(user);
//   }
//   return false;
// };

document.getElementById("header").innerHTML = "Hello JavaScript!";
fetch('http://127.0.0.1:3000/user')
    .then(res => console.log(res))
    // .then(data => console.log(data))
    .catch(err => console.log(err));