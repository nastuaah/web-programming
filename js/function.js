const node_for_click_surname = document.getElementById("for_click_surname")
function change_surname(){
    const surname=document.getElementsByTagName('div')[3]
    console.log(surname.innerHTML)
    surname.innerHTML="KHOMENKO"
}
node_for_click_surname.addEventListener("click",change_surname)

const node_for_click_name = document.getElementById("for_click_name")
function change_name(){
    const name=document.getElementsByTagName('div')[4]
    console.log(name.innerHTML)
    name.innerHTML="ANASTASIA"
}
node_for_click_name.addEventListener("click",change_name)

const node_for_click_middle_name = document.getElementById("for_click_middle_name")
function change_middle_name(){
    const middle_name=document.getElementsByTagName('div')[5]
    console.log(middle_name.innerHTML)
    middle_name.innerHTML="MAKSIMOVNA"
}
node_for_click_middle_name.addEventListener("click",change_middle_name)

const node_for_click_date_of_birth = document.getElementById("for_click_date_of_birth")
function change_date_of_birth(){
    const date_of_birth=document.getElementsByTagName('div')[7]
    console.log(date_of_birth.innerHTML)
    date_of_birth.innerHTML="10.03.2004"
}
node_for_click_date_of_birth.addEventListener("click",change_date_of_birth)

const node_for_click_date_of_issue = document.getElementById("for_click_date_of_issue")
function change_date_of_issue(){
    const date_of_issue=document.getElementsByTagName('div')[1]
    console.log(date_of_issue.innerHTML)
    date_of_issue.innerHTML="17.04.2008"
}
node_for_click_date_of_issue.addEventListener("click",change_date_of_issue)