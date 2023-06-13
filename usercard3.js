let dhonioldinfo ={
    imgurl:"https://qph.cf2.quoracdn.net/main-qimg-f6bcacabffd09f4e7b5dfdd97f8db6e0-lq", 
    name:"Mahendra Singh Dhoni",
    Description :"Captain"
}

let dhoniyounginfo = {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlYJXd9QNuYtydlutW00qlEwJsEgyd27RtcqXqRywjw&usqp=CAU&ec=48665701",
    name:"MSD",
    Description :"Indian Cricketer"
}
let isdhoniold = true;
let displayobject;
let flipdata = function(){
    if(isdhoniold == true){
        displayobject = dhoniyounginfo;
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