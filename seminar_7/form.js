function showElements () {

    let form = document.getElementById("UserEnter")
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        var date = document.getElementById("date").value;
        const dateShow = document.getElementById("dateShow");
        dateShow.innerHTML = date;

        var name = document.getElementById("name").value;
        const nameShow = document.getElementById("nameShow");
        nameShow.innerHTML = name;

        var last_name = document.getElementById("last_name").value;
        const last_nameShow = document.getElementById("last_nameShow");
        last_nameShow.innerHTML = last_name;

        const data = new FormData(form);
        const serviceShow = document.getElementById("serviceShow");
        serviceShow.innerHTML = data.get("service");
    })
}