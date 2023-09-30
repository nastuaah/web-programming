const node_insert_img = document.getElementById("insert_img")
function insert_img(){

const img = document.createElement('img');

img.src = './seminar_2-3/ph.jpeg';
img.alt = 'Описание изображения';
img.height = '200';
img.width='300';

const container = document.querySelector('#image-container');

container.append(img);

document.getElementsByTagName("div")[1].appendChild(img);

}
node_insert_img.addEventListener("click",insert_img)