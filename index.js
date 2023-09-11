const image = document.querySelector(".image");
const scrollable = document.querySelector(".scrollable-content");
scrollable.addEventListener("scroll",reveal)
function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealButtom = reveals[i].getBoundingClientRect().bottom;
        var revealpoint = 150;
        if(windowheight - revealTop > revealpoint && windowheight - revealButtom < revealpoint){
            reveals[i].classList.add("desplayed");
        }
        else{
            reveals[i].classList.remove("desplayed");
        }
    }
}
images_list = ["./imgini_website/camera1/1.jpg","./imgini_website/camera1/2.jpg","./imgini_website/camera1/3.jpg","./imgini_website/camera2/DSC_0164.jpg",'./imgini_website/camera2/DSC_0165.jpg','./imgini_website/camera2/DSC_0166.jpg','./imgini_website/camera2/DSC_0169.jpg','./imgini_website/camera3/DSC_0149.jpg','./imgini_website/camera3/DSC_0151.jpg','./imgini_website/camera3/DSC_0157.jpg','./imgini_website/camera3/DSC_0161.jpg','./imgini_website/camera4/DSC_5889.jpg','./imgini_website/camera4/DSC_5890.jpg','./imgini_website/camera4/DSC_5893.jpg','./imgini_website/camera5/DSC_5918.jpg','./imgini_website/camera5/DSC_5920.jpg','./imgini_website/camera5/DSC_5921.jpg','./imgini_website/camera5/DSC_5921.jpg','./imgini_website/camera5/DSC_5924.jpg','./imgini_website/camera5/DSC_5927.jpg','./imgini_website/exterior/DSC_4638.jpg','./imgini_website/exterior/DSC_5832.jpg','./imgini_website/exterior/gratar.jpg','./imgini_website/exterior/DSC_5837.jpg','./imgini_website/exterior/DSC_5842.jpg','./imgini_website/exterior/DSC_5855.jpg','./imgini_website/exterior/DSC_5861.jpg']
var index_img = 0;
const img = document.createElement("img");
image.appendChild(img);
img.src = images_list[index_img];

const fundal = document.querySelector(".galerie_fundal");
const img_fundal = document.createElement("img");
fundal.appendChild(img_fundal);
img_fundal.src = images_list[index_img];


function Next(){
    index_img += 1;
    if(index_img >= (images_list.length-1)){
        index_img = 0;
    }
    img.src = images_list[index_img];
    
    img_fundal.src = images_list[index_img];
}


function Back(){
    index_img -= 1;
    console.log(index_img);
    if(index_img < 0){
        index_img = images_list.length - 1;
    }
    img.src = images_list[index_img];
    img_fundal.src = images_list[index_img];
}


const s1 = document.querySelectorAll('#s1');
const s2 = document.querySelectorAll('#s2');
const s3 = document.querySelectorAll('#s3');
let index = 0;
let lista = [s1, s2, s3];
function Inapoi(){
    if(index == 0){
        actual_index = 2;
    }
    else{
        actual_index = index - 1;
    }
    console.log(index);
    console.log(actual_index);
    lista[index].forEach(element => {
        element.classList.remove('active')
    });
    lista[actual_index].forEach(element => {
        element.classList.add('active')
    });

    index = actual_index;
}

function Inainte(){
    if(index == 2){
        actual_index = 0;
    }
    else{
        actual_index = index + 1;
    }
    lista[index].forEach(element => {
        element.classList.remove('active')
    });
    console.log(lista[actual_index])
    lista[actual_index].forEach(element => {
        element.classList.add('active')
    });

    index = actual_index;
}

setInterval(()=>{Inainte()},5000)

var pret = document.getElementById('pret');
var d = new Date()
var vr = d.getFullYear();
var month = d.getMonth() + 1;
if(month < 10) {
    month = '0' + month;
}
var date = d.getDate();
if(date<10){
    date = '0' + date;
}
var c_date = vr + '-' + month + '-' + date;
var c_date1 = vr + '-' + month + '-' + date;
document.getElementById('date1').value = c_date;
document.getElementById('date1').setAttribute('min',c_date)
document.getElementById('date2').setAttribute('min',c_date1)
document.getElementById('date2').value = c_date1;

function calculateDaysInsideOutside(mainStartDate, mainEndDate, inputStartDate, inputEndDate) {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    const mainStart = new Date(mainStartDate);
    const mainEnd = new Date(mainEndDate);
    const inputStart = new Date(inputStartDate);
    const inputEnd = new Date(inputEndDate);

    let daysInside = 0;
    let daysOutside = 0;

    // Iterate through each day in the input interval
    for (let currentDate = inputStart; currentDate <= inputEnd; currentDate.setDate(currentDate.getDate() + 1)) {
        if (currentDate >= mainStart && currentDate <= mainEnd) {
            daysInside++;
        } else {
            daysOutside++;
        }
    }

    return { daysInside, daysOutside };
}

function calculeaza(){

    const xmlhtt = new XMLHttpRequest();
    xmlhtt.onload = function(){
        const myObiect = JSON.parse(this.responseText);
        
    let remove = document.querySelectorAll('#pret_camera');
    if(remove){
        remove.forEach((element)=>{
            element.remove();
        });
    }
    var pers = document.getElementById('pers').value;
    pers = Math.ceil(pers/2);
    let inceput = myObiect.inceput;
    let final = myObiect.final;
    inceput = new Date(inceput)
    final = new Date(final);
    console.log(new Date(final));
    const inputDate1 = new Date(document.getElementById('date1').value);
    const inputDate2 = new Date(document.getElementById('date2').value);

    let obc = calculateDaysInsideOutside(inceput,final,inputDate1,inputDate2);
        if(obc.daysInside && obc.daysOutside){
            if(pers < 6 ){
            percamera = (obc.daysInside * myObiect.camera_special * pers) + (obc.daysOutside * myObiect.camera * pers);
            }
            else{
                percamera = ((obc.daysInside * myObiect.cabana_special) + (obc.daysOutside * myObiect.cabana));
            }
        }
        else if(obc.daysInside == 0 && obc.daysOutside > 0){
            if(pers < 6){
            percamera = (obc.daysOutside * myObiect.camera) * pers;
            }else{
                percamera = (obc.daysOutside * myObiect.cabana);
            }
        }
        else if(obc.daysOutside == 0 && obc.daysInside > 0){
            if(pers < 6){
                percamera = (obc.daysInside * myObiect.camera_special) * pers
            }
            else{
                percamera = (obc.daysInside * myObiect.cabana_special)
            }
        }
            let perzi = document.createElement('div');
            perzi.classList.add('pret_camera');
            perzi.setAttribute('id', 'pret_camera');
            var p_ret = document.createElement('p');
            p_ret.textContent = String(percamera) + "lei"   
            let newdiv = document.createElement('div');
            newdiv.classList.add("pret_zi");
            let containerdiv = document.createElement('div');
            let ul = document.createElement('ul');
            let ui1 = document.createElement('li');
            ui1.textContent = "copii sub 7 ani au  gratuitate";
            ul.appendChild(ui1);
            let ui2 = document.createElement('li');
            ui2.textContent = "4 camere matrimoniale cu baie interioara";
            ul.appendChild(ui2);
            let ui3 = document.createElement('li');
            ui3.textContent = "2 camere matrimoniale cu baie pe hol";
            ul.appendChild(ui3);
            let ui4 = document.createElement('li');
            ui4.textContent = "8 locuri de parcare in incinta pensiuni";
            ul.appendChild(ui4);
            let ui5 = document.createElement('li');
            ui5.textContent = "serviciile pot fi achitate si cu tichete de vacanta Sodexo Turist Pass sau UP Romania Cheque Vacances.";
            ul.appendChild(ui5);
            let li = document.createElement('li');
            li.textContent = "camera( max 2 persoane) - 160lei/zi";
            ul.appendChild(li)
            let li1 = document.createElement('li');
            li1.textContent = "1000/zi (toata pensiunea)"
            ul.appendChild(li1);
            if(myObiect.special){
                let pi = document.createElement('li');
                pi.textContent = myObiect.special;
                ul.append(pi);
            }
            containerdiv.appendChild(ul);
            containerdiv.classList.add("conatinerdiv");
            newdiv.appendChild(p_ret)
            perzi.appendChild(newdiv)
            perzi.appendChild(containerdiv);
            pret.appendChild(perzi);

    }
    xmlhtt.open("GET", "/php/api1.php");
    xmlhtt.send();
}

function verificare_persoane(){
    let pers = document.getElementById('pers').value;
    if(pers > 12){
        document.getElementById('pers').value = 12;
    }
}

calculeaza();

function schimaba_data_low(){
    const inputDate1 = new Date(document.getElementById('date1').value);
    const date2Element = document.getElementById('date2');
    const Day1 = new Date(inputDate1)
    const Day2 = new Date(date2Element.value);
    if(Day1.getTime() > Day2.getTime()){ 
    Day1.setDate(Day1.getDate());
    const nextDayFormatted = Day1.toISOString().split('T')[0];
    date2Element.value = nextDayFormatted;
    date2Element.setAttribute('min', nextDayFormatted);
    }
}
