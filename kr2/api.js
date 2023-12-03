function sort(){
    let price=document.getElementById("price")
    let title=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
         getResponce2()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}

async function getResponce2() {

    let responce = await fetch("package.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 10)
    //content.sort()
    console.log(content)
    let key
    /*for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }*/
    content_price=content.sort((a, b) => a.price - b.price);

    let node_for_insert = document.getElementById("node_for_insert")
    //node_for_insert.innerHTML='';
    for (key in content_price) {
                node_for_insert.innerHTML += `
                <li style="width: 210px; background-color: transparent" class="d-flex flex-column m-1 p-1 card-title">
                <img style="width: 210px" class="align-self-center" src=${content[key].img}>
                <h5 class="card-title" align="center" style="font-size: 25px;">${content[key].title}</h5>
                <p class="card-text">Price ${content[key].price} $.</p>
                <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
                <p class="card-text" >Add <input class="w-25" type="number" name="amount" value="0"></p>
                </li>
                        `
            }

}
async function getResponce1() {
    let responce = await fetch("package.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 10)
    //content.sort()
    console.log(content)
    let key
    /*for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }*/

    // sort by name
    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

   // node_for_insert.innerHTML='';
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_title) {
                node_for_insert.innerHTML += `
                <li style="width: 210px; background-color: #d3cec2" class="d-flex flex-column m-1 p-1">
                <img style="width: 210px" class="align-self-center" src=${content[key].img}>
                <h5 class="card-title" align="center" style="font-size: 25px;">${content[key].title}</h5>
                <p class="card-text">Price ${content[key].price} $.</p>
                <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
                <p class="card-text" >Add <input class="w-25" type="number" name="amount" value="0"></p>
                </li>
                        `
            }

}

sort()