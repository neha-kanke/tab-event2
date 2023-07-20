

let cl= console.log

const tabheading=[...document.querySelectorAll('.tabheading > li')];
const tabcontent=[...document.querySelectorAll('.tabcontent')]
cl(tabheading)





const onhand=(eve)=>{
    cl(eve.target);
    let getid=eve.target.getAttribute('data-id');
    cl(getid);

    tabheading.forEach(li=>{
        li.classList.remove('active');
    })
    eve.target.classList.add('active')
   
    tabcontent.forEach(tab=>{
        tab.classList.remove('active');
    })
    document.getElementById(getid).classList.add('active')
}





tabheading.forEach(li=>{
    li.addEventListener('click',onhand)
    // cl(li)
})