let tarefas = []

function addTask() {
    let task = document.getElementById("task").value;
    if(!task){
        alert("preencha o campo")
        return
    }
    tarefas.push(task)
    console.table(tarefas)
    atualizarLista()

    
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    //let key = 'item1'
    //localStorage.setItem(key,'value')
    //let myItem = localStorage.getItem(key);
    //let myObj = { name: 'Gabriel', age: 25};
    
    //let myItem= JSON.parse(localStorage.getItem(key));
    
}

function atualizarLista(){
    let lista = document.getElementById("taskList")
    tarefas.forEach(task => {
        let item = document.createElement("li");
        item.textContent = task;
        lista.appendChild(item);
    });
    

    
}