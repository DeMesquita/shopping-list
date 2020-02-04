//referências dos elementos
var listElement = document.querySelector('#app ul');
var inputElemet = document.querySelector('#app input');
var buttonElemet = document.querySelector('#app button');

//todos da lista
var todos = JSON.parse(localStorage.getItem('list_todos')) || []; //DEFININDO ARRAY VAZIO COMO PADRÃO

//mostrar itens
function renderTodos() {
    listElement.innerHTML = ''; //remove conteúdo já presente na list Element

    for (value of todos) {
        var todoElement = document.createElement('li');  //Criando elementos com JS
        todoElement.setAttribute('class',  'list-group-item');
        var todoText = document.createTextNode(value + ' ');

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('class', 'badge badge-danger');   


        var position = todos.indexOf(value);
        linkElement.setAttribute('onclick', 'removeTodo(' + position + ')');

        var linkText = document.createTextNode('Remover');
      

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }

}

renderTodos(); //Mostrando itens já presentes na lista

//add itens
function addTodo() {
    var todoText = inputElemet.value;

    todos.push(todoText); //ADD ITEM NO VETOR

    inputElemet.value = ''; //apagar texto do input após add

    renderTodos(); //Mostrar item adicionado
    saveStorage();
}

buttonElemet.onclick = addTodo;

//remover itens
function removeTodo(position) {
    todos.splice(position, 1);//remove itens com position
    renderTodos();
    saveStorage();
}

//salvar 
function saveStorage() {


    localStorage.setItem('list_todos', JSON.stringify(todos));
}
