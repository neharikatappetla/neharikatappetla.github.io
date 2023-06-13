let dhonioldinfo ={
    imgurl:"https://qph.cf2.quoracdn.net/main-qimg-f6bcacabffd09f4e7b5dfdd97f8db6e0-lq", 
    name:"Mahendra Singh Dhoni",
    Description :"Captain"
}


let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => console.log(data))
    document.getElementById("dhoni-img").src = displayobject.imgurl;
    document.getElementById("dhoni-name").innerHTML =displayobject.name;
    document.getElementById("dhoni-description").innerHTML = displayobject.Description;
}