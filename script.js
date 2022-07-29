window.addEventListener("load", function(){

  let formNode = document.getElementById("new-task-form");
  let tasks = [];

  formNode.addEventListener("submit", function(event){

    event.preventDefault();

    // get text out of the input
    let inputNode = document.getElementById("task-input");
    let newTask = inputNode.value; 

    tasks.push(newTask);

    inputNode.value = "";

    let listMarkup = "<ul>";

    for (let i = 0; i < tasks.length; i++) {
      listMarkup += `<li>${tasks[i]}</li>`;
    }

    listMarkup += "</ul>";

    document.getElementById("task-list-container").innerHTML = listMarkup;

    let liNodes = document.querySelectorAll("li");

    for (let i = 0; i < liNodes.length; i++) {
      liNodes[i].addEventListener("click", function(event){
        let node = event.target;
        node.style.textDecoration = "line-through";
      });
    }

  });

});