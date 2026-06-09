 let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
 tasks.forEach(function(item, index) {
    let List = document.getElementById("taskList");

    if (List.innerHTML.includes("No Tasks Yet")) {
        List.innerHTML = "";
    }

    List.innerHTML += `
        <li>
            ${item.task} (${item.subject} - ${item.priority})
            <button
            onclick="this.parentElement.classList.toggle('completed')"
            >✔</button>
            <button onclick="deleteTask(${index})">x</button>
        </li>
    `;
 });
 
 function showTask() {
    let task = document.getElementById("taskInput").value;
    let subject = document.getElementById("subject").value;
    let priority = document.getElementById("priority").value;

    tasks.push({
        task: task,
        subject: subject,
        priority: priority
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    let List = document.getElementById("taskList");

    if (List.innerHTML.includes("No Tasks Yet")) {
        List.innerHTML = "";
    }
    

    List.innerHTML += `
    <li>
       ${task} (${subject} - ${priority})
       <button
       onclick="this.parentElement.classList.toggle('completed')"
         >✔</button>
       <button onclick="this.parentElement.remove()">x</button>
    </li>
    `;
    document.getElementById("taskInput").value = "";
        
        console.log(task);
}
    
function deleteTask(index) {
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    location.reload();
}