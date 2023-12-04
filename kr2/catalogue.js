async function getResponce1() {

    let responce = await fetch("catalogue.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 6)
    console.log(content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 300px" class="d-flex flex-column m-1 p-1">
        <img style="width: 300px; height: 350px" class="align-self-center" src=${content[key].img} title=${content[key].imgTitle}>
        <h5 class="card-title" style="text-align: center">${content[key].title}</h5>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        </li>
                `
    }
}
getResponce1()