class e{wordSelectMode=!1;selectedItems=[];firstSelectedItem;gridArea=null;words=[];foundWords=[];tbl;hint=document.querySelector(".hint");success=document.querySelector(".success");getCellsInRange(e,t){let s=[];if(e.y===t.y){if(e.x===t.x)return s;e.x>t.x&&([t,e]=[e,t]);for(let d=e.x;d<=t.x;d++)s.push(this.gridArea.querySelector(`td[data-x="${d}"][data-y="${t.y}"]`))}else if(e.x===t.x){if(e.y===t.y)return s;e.y>t.y&&([t,e]=[e,t]);for(let d=e.y;d<=t.y;d++)s.push(this.gridArea.querySelector(`td[data-x="${t.x}"][data-y="${d}"]`))}else if(t.x-e.x==t.y-e.y){if(e.x===t.x)return s;if(e.y===t.y)return s;e.y>t.y&&([t,e]=[e,t]);for(let d=0;d<=t.y-e.y;d++)s.push(this.gridArea.querySelector(`td[data-x="${e.x+d}"][data-y="${e.y+d}"]`))}else if(t.x-e.x==e.y-t.y){if(e.x===t.x)return s;if(e.y===t.y)return s;e.y<t.y&&([t,e]=[e,t]);for(let d=0;d<=t.x-e.x;d++)s.push(this.gridArea.querySelector(`td[data-x="${e.x+d}"][data-y="${e.y-d}"]`))}return s}downHandler(e){if(!e.target.closest("td"))return;if(e.target.classList.contains("selected"))return;this.success.classList.add("hidden");const t=e.target;t.classList.add("selected");const s=+t.dataset.x,d=+t.dataset.y;this.firstSelectedItem={x:s,y:d},this.tbl.removeEventListener("click",this.downHandlerBoundThis),this.tbl.addEventListener("click",this.moveHandlerBoundThis)}moveHandler(e){if(!e.target.closest("td"))return;if(e.target.classList.contains("selected"))return;const t=e.target,s=+t.dataset.x,d=+t.dataset.y;this.selectedItems.forEach((e=>e.classList.remove("selected"))),this.selectedItems=this.getCellsInRange(this.firstSelectedItem,{x:s,y:d}),console.log(this.selectedItems),this.selectedItems.forEach((e=>e.classList.add("selected"))),this.hint.classList.remove("hidden"),this.tbl.removeEventListener("click",this.moveHandlerBoundThis),this.tbl.addEventListener("click",this.upHandlerBoundThis)}upHandler(e){const t=this.selectedItems.reduce(((e,t)=>e+t.dataset.letter),""),s=t.split("").reverse().join("");-1!==this.words.indexOf(t)?(this.foundWords.push(t),this.selectedItems.forEach((e=>e.classList.add("selected-correct"))),this.selectedItems=[],this.success.classList.remove("hidden")):-1!==this.words.indexOf(s)?(this.foundWords.push(s),this.selectedItems.forEach((e=>e.classList.add("selected-correct"))),this.selectedItems=[],this.success.classList.remove("hidden")):this.selectedItems.forEach((e=>e.classList.remove("selected"))),this.hint.classList.add("hidden"),this.tbl.removeEventListener("click",this.upHandlerBoundThis),this.tbl.addEventListener("click",this.downHandlerBoundThis)}downHandlerBoundThis=this.downHandler.bind(this);moveHandlerBoundThis=this.moveHandler.bind(this);upHandlerBoundThis=this.upHandler.bind(this);renderGrid(e,t){this.gridArea=document.querySelector(".grid-area"),""!==this.gridArea.innerHTML&&(this.gridArea.innerHTML=""),this.tbl=document.createElement("table");const s=document.createElement("tbody");let d=0;for(let r=0;r<e;r++){const i=document.createElement("tr");for(let s=0;s<e;s++){const e=document.createElement("td"),n=t[d++],a=document.createTextNode(n);e.appendChild(a),e.setAttribute("data-x",s),e.setAttribute("data-y",r),e.setAttribute("data-letter",n),i.appendChild(e)}s.appendChild(i)}this.tbl.appendChild(s),this.gridArea.appendChild(this.tbl),this.tbl.addEventListener("click",this.downHandlerBoundThis)}}document.querySelector(".submit-word").addEventListener("click",(async function(){const t=new e,s=document.querySelector(".words-input").value,d=document.querySelector(".grid-size-input").value;if(!s||!d){return void(document.querySelector(".grid-area").innerHTML='<h1 class="error">Please enter comma-separated list of words and a grid size</h1>')}const r=await async function(e,t){const s=await fetch(`./wordgrid?gridSize=${e}&wordList=${t}`),d=await s.text();return d.split(" ").filter((e=>"\r\n"!=e&&""!=e))}(d,s);t.words=s.toUpperCase().split(","),t.renderGrid(d,r)}));
//# sourceMappingURL=index.19244a24.js.map
