window.onload = () => {
    var title = document.getElementById("title");
    var date = new Date();
    title.innerHTML = `Lista de taréfas - ${date.toLocaleDateString("pt-BR")}`;
}

function addNewTask() {


    var textEmpty = document.querySelector("p")

    var listElement = document.querySelector("ul");

    var inputElement = document.getElementById("task-input");

    var listItemElement = document.createElement("li");
    listItemElement.style.cursor = "pointer";

    const taskName = document.createTextNode(inputElement.value);


    if ((inputElement.value.length >= 5)) {


        if (textEmpty) {
            textEmpty.remove()
        }

        listItemElement.appendChild(taskName);
        listElement.appendChild(listItemElement);

        if (inputElement) {
            inputElement.value = ""
        }

        listItemElement.addEventListener("click", ()=> {
            listItemElement.classList.add("completed");
        })

    } else {
        alert("Para adicionar uma tarefa é necessário pelo menos 5 caracteres");
    }

}



