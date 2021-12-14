const lightbox = document.createElement("div");
const image = document.createElement("img");
/////
/////
/////
function Detect_Click(e)
{
    if (e.target != e.currentTarget)
    {
        return
    }
    e.currentTarget.classList.toggle("active");
    document.getElementById(image.id).src = "";
}
//
//
//This is the function called by the click event listener atached to images of class "lightbox_image"
function Detect_Click_On_Picture(e)
{
    document.getElementById(lightbox.id).classList.toggle("active");
    document.getElementById(image.id).src = e.currentTarget.src;
}
//
//
//This function creates a div named "lightbox" in which the pictures with the images of class "lightbox_image" will be displayed when they are clicked
function Lightbox()
{ 
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);
    document.getElementById("lightbox").addEventListener("click", Detect_Click)
    Lightbox_Image();
}
//
//
//This function creates adds a click event listener to all images of class "lightbox_image"
function Lightbox_Image()
{
    image.id = "lightbox_image";
    document.getElementById("lightbox").appendChild(image);
    const class_name = "lightbox_image";
    let list = document.getElementsByClassName(class_name);
    for (let element of list) {element.addEventListener('click', Detect_Click_On_Picture)};
}
/////
/////
/////
window.onload = function(){
    if(document.getElementById("init-screen").style.display = "none")
    {setTimeout(function(){
        Lightbox();
        }, 0); };
}