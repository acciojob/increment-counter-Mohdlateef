let paragraph=document.querySelector("#para");
let count=1;
let btn=document.querySelector("#incrementBtn");
paragraph.innerText=count.toString();

btn.addEventListener("click",()=>{
	
paragraph.innerText=count.toString();
  alert(count);
  count++;
	

}
  );
