function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");

      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.textContent = taskText;

      // Task complete toggle
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => li.remove();

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    }