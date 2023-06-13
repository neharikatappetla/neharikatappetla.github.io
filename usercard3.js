let dhonioldinfo ={
    imgurl:"https://qph.cf2.quoracdn.net/main-qimg-f6bcacabffd09f4e7b5dfdd97f8db6e0-lq", 
    name:"Mahendra Singh Dhoni",
    Description :"Captain"
}


let displayobject ={
    name:"",
    imgurl:"",
    Description:""
};
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
        displayobject.name=data.results[0].name.first + " " + data.results[0].name.last
        //displayobject.name= "Neharika"
        displayobject.imgurl =data.results[0].picture.large
        displayobject.Description=data.results[0].gender
        document.getElementById("dhoni-img").src = displayobject.imgurl;
        document.getElementById("dhoni-name").innerHTML =displayobject.name;
        document.getElementById("dhoni-description").innerHTML = displayobject.Description;

    })
    
}