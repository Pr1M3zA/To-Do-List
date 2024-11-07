document.getElementById("bNewTask").addEventListener("click", ()=>{
    let task = document.getElementById("newTask").value;
    if(task === ''){
        alert("You must write something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = task
        document.getElementById("tasks").appendChild(li);
    }
})

document.getElementById("tasks").addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }
})

document.getElementById("bDeleteTasks").addEventListener("click", ()=>{ 
    let doneTasks = document.querySelectorAll(".done");
    doneTasks.forEach(task => {
        task.remove();
    })
})