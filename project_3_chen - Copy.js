// =====================
// USER PROFILE
// =====================
const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const saveProfileBtn = document.querySelector("#saveProfileBtn");
const profileDisplay = document.querySelector("#profileDisplay");

saveProfileBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !age) {
        profileDisplay.textContent = "Please enter both name and age.";
        profileDisplay.className = "error";
        return;
    }

    profileDisplay.textContent = `Name: ${name}, Age: ${age}`;
    profileDisplay.className = "success";

    nameInput.value = "";
    ageInput.value = "";
});

// =====================
// TASK MANAGER
// =====================
let tasks = [];

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = "";
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task.completed ? "✅" : "⬜"} ${task.text}
            <button class="toggle-btn">Toggle</button>
            <button class="delete-btn">🗑️</button>
        `;

        li.querySelector(".toggle-btn").addEventListener("click", () => {
            tasks = tasks.map(t =>
                t.id === task.id ? { ...t, completed: !t.completed } : t
            );
            renderTasks();
        });

        li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });

        taskList.appendChild(li);
    });
}

function showCompleted() {
    const filtered = tasks.filter(task => task.completed);

    taskList.innerHTML = "";
    filtered.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `✅ ${task.text}`;
        taskList.appendChild(li);
    });
}

// JSON Simulation
function saveTasks() {
    const json = JSON.stringify(tasks);
    console.log("Saved:", json);
}

function loadTasks() {
    const json = JSON.stringify(tasks);
    tasks = JSON.parse(json);
    renderTasks();
}

// =====================
// FETCH USERS
// =====================
const apiStatus = document.querySelector("#apiStatus");
const userList = document.querySelector("#userList");
const loadUsersBtn = document.querySelector("#loadUsersBtn");
const loadPostsBtn = document.querySelector("#loadPostsBtn");
const clearUsersBtn = document.querySelector("#clearUsersBtn");

async function fetchUsers() {
    apiStatus.textContent = "Loading users...";
    apiStatus.className = "";
    userList.innerHTML = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) throw new Error();

        const users = await response.json();

        if (users.length === 0) {
            apiStatus.textContent = "No results found";
            return;
        }

        apiStatus.textContent = "Users loaded!";
        apiStatus.className = "success";

        renderUsers(users);

    } catch (error) {
        apiStatus.textContent = "Error loading users.";
        apiStatus.className = "error";
        console.error(error);
    }
}

function renderUsers(users) {
    userList.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${user.name}</strong>
            <button class="details-btn">Details</button>
            <button class="fav-btn">⭐</button>
            <div class="details" style="display:none;">
                <p>Email: ${user.email}</p>
                <p>Company: ${user.company.name}</p>
            </div>
        `;

        const detailsDiv = li.querySelector(".details");

        li.querySelector(".details-btn").addEventListener("click", () => {
            detailsDiv.style.display =
                detailsDiv.style.display === "none" ? "block" : "none";
        });

        li.querySelector(".fav-btn").addEventListener("click", () => {
            alert(`${user.name} added to favorites ⭐`);
        });

        userList.appendChild(li);
    });
}

// =====================
// FETCH POSTS
// =====================
async function fetchPosts() {
    apiStatus.textContent = "Loading posts...";
    apiStatus.className = "";
    userList.innerHTML = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) throw new Error();

        const posts = await response.json();

        apiStatus.textContent = "Posts loaded!";
        apiStatus.className = "success";

        renderPosts(posts.slice(0, 10));

    } catch (error) {
        apiStatus.textContent = "Error loading posts.";
        apiStatus.className = "error";
        console.error(error);
    }
}

function renderPosts(posts) {
    userList.innerHTML = "";

    posts.forEach(post => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${post.title}</strong>
            <button class="details-btn">Details</button>
            <div class="details" style="display:none;">
                <p>${post.body}</p>
            </div>
        `;

        const detailsDiv = li.querySelector(".details");

        li.querySelector(".details-btn").addEventListener("click", () => {
            detailsDiv.style.display =
                detailsDiv.style.display === "none" ? "block" : "none";
        });

        userList.appendChild(li);
    });
}

// =====================
// BUTTON EVENTS
// =====================
loadUsersBtn.addEventListener("click", fetchUsers);
loadPostsBtn.addEventListener("click", fetchPosts);

clearUsersBtn.addEventListener("click", () => {
    userList.innerHTML = "";
    apiStatus.textContent = "Data cleared";
});