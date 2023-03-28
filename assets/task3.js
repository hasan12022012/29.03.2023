"use strict";

// TASK3
let tbl=document.getElementById('tbl');
let slc=document.getElementById('slc');

function add(){

    tbl.style.display = 'table';

    
    let result='';
    let color;
    for(let i=1;i<=slc.value;i++){

        result+=`<tr>`;

        for(let j=1;j<=slc.value;j++){
            color = (i+j)%2 == 0 ? 'black' : '';
            result+=`<td style="background-color:${color};"> ${i}+${j} </td>`;
        }
        result+=`</tr>`;
    }

    tbl.innerHTML = result;
}

slc.addEventListener('change', add);