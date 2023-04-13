let menu = document.getElementById('menu'); 
let close =document.getElementById('close'); 
let nav =document.getElementById('nav');

 menu.onclick = function(){ 
    menu.style.visibility ='hidden'; 
    nav.style.right ='0'; 
    close.style.visibility ='visibile';
 }
 close.onclick =function(){ 
    menu.style.visibility ="visible" 
    close.style.visibility ="visible"; 
    nav.style.right ="-250px"
 }