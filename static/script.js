const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

async function loadTasks() {
    const res = await fetch("/api/tasks");
    const tasks = await res.json();
    list.innerHTML = "";
    tasks.forEach(renderTask);
}

function renderTask(task) {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!task.done;
    checkbox.onchange = () => toggleTask(task.id, checkbox.checked);

    const span = document.createElement("span");
    span.textContent = task.title;

    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => deleteTask(task.id);

    li.append(checkbox, span, delBtn);
    list.appendChild(li);
}

async function toggleTask(id, done) {
    await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done }),
    });
    loadTasks();
}

async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    loadTasks();
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = input.value.trim();
    if (!title) return;

    await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
    input.value = "";
    loadTasks();
});

loadTasks();
