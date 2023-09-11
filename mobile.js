let informatii_phone = document.getElementById('informatii_phone');
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById('camera').textContent = "camera: "+myObj.camera+"lei/zi";
  document.getElementById('pensiune').textContent = "toata pensiunea: " +myObj.cabana+ "lei/zi"
  if(myObj.special){
    let div_special = document.createElement('div');
    div_special.classList.add('avertismet_special');
    let specil_p = document.createElement('p');
    specil_p.textContent = myObj.special;
    div_special.appendChild(specil_p);
    informatii_phone.appendChild(div_special);
  }
  console.log(myObj.camera)
}
xmlhttp.open("GET", "/php/api1.php");
xmlhttp.send();

const image_mob = document.querySelector(".image_container");
images_list_mob = ["./imgini_website/camera1/1.jpg","./imgini_website/camera1/2.jpg","./imgini_website/camera1/3.jpg","./imgini_website/camera2/DSC_0164.jpg",'./imgini_website/camera2/DSC_0165.jpg','./imgini_website/camera2/DSC_0166.jpg','./imgini_website/camera2/DSC_0169.jpg','./imgini_website/camera3/DSC_0149.jpg','./imgini_website/camera3/DSC_0151.jpg','./imgini_website/camera3/DSC_0157.jpg','./imgini_website/camera3/DSC_0161.jpg','./imgini_website/camera4/DSC_5889.jpg','./imgini_website/camera4/DSC_5890.jpg','./imgini_website/camera4/DSC_5893.jpg','./imgini_website/camera5/DSC_5918.jpg','./imgini_website/camera5/DSC_5920.jpg','./imgini_website/camera5/DSC_5921.jpg','./imgini_website/camera5/DSC_5921.jpg','./imgini_website/camera5/DSC_5924.jpg','./imgini_website/camera5/DSC_5927.jpg','./imgini_website/exterior/DSC_4638.jpg','./imgini_website/exterior/DSC_5832.jpg','./imgini_website/exterior/gratar.jpg','./imgini_website/exterior/DSC_5837.jpg','./imgini_website/exterior/DSC_5842.jpg','./imgini_website/exterior/DSC_5855.jpg','./imgini_website/exterior/DSC_5861.jpg']
var index_img_mob = 0;
const img_mob = document.createElement("img");
image_mob.appendChild(img_mob);
img_mob.src = images_list_mob[index_img_mob];

function Next_mob(){
  index_img_mob += 1;
  if(index_img_mob >= (images_list_mob.length-1)){
      index_img_mob = 0;
  }
  img_mob.src = images_list_mob[index_img_mob];
}


function Back_mob(){
  index_img_mob -= 1;
  if(index_img_mob < 0){
      index_img_mob = images_list_mob.length - 1;
  }
  img_mob.src = images_list_mob[index_img_mob];
}
