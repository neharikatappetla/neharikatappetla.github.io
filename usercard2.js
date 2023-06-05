let dhonioldinfo ={
    imgurl:"https://qph.cf2.quoracdn.net/main-qimg-f6bcacabffd09f4e7b5dfdd97f8db6e0-lq", 
    name:"Mahendra Singh Dhoni",
    Description :"Captain"
}

let dhoninewinfo = {
    imgurl:"2wCEAAkGBxIQEhUPEhAQDw8PEA8PDxAVDxUQEBAPFRIWFhUVFRUYHSggGBolGxUVITIhJSkuLi8uFx8zODMtNygtLi0BCgoKDg0OGhAQFy0dIB0uLSstLS0tLS0tLS8vLy0rLS8tLS0tKy0tLSsrLS0tKy0tLS0rLSstLS0tLS0tLS0tLf",
    name:"MSD",
    Description :"Indian Cricketer"
}
let isdhoniold = true;
let displayobject;
let flipdata = function(){
    if(isdhoniold == true){
        displayobject = dhoninewinfo;
        isdhoniold = false;
    }
    else{
        displayobject = dhonioldinfo;
        isdhoniold = true;
    }
    document.getElementById("dhoni-img").src = displayobject.imgurl;
    document.getElementById("dhoni-name").innerHTML =displayobject.name;
    document.getElementById("dhoni-description").innerHTML = displayobject.Description;
}