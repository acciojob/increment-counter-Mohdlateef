let paragraph=document.querySelector("#para");
let count=0;
let btn=document.querySelector("#incrementBtn");
paragraph.innerText=count.toString();
	let w=0;

btn.addEventListener("click",()=>{
++count;
	paragraph.innerText=count.toString();
  alert(w);
   
	w++;
	

}
  );
