//your JS code here. If required.
let paragraph=document.querrySelector("#para");
let i=0;
paragraph.innerText=i.toString();
let btn=document.querrySelector("#incrementBtn");
btn.addEventListenser("click",() =>{
	alert(i);
})

