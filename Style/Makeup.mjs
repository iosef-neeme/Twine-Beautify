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
function Detect_Click_On_Picture(e)
{
    document.getElementById(lightbox.id).classList.toggle("active");
    document.getElementById(image.id).src = e.currentTarget.src;
}
function Lightbox()
{ 
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);
    document.getElementById("lightbox").addEventListener("click", Detect_Click)
    Lightbox_Image();
}
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