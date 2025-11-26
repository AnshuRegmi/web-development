document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const department = document.getElementById("department").value;
    const email = document.getElementById("email").value;

    // Display on card
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayRoll").textContent = roll;
    document.getElementById("displayDept").textContent = department;
    document.getElementById("displayEmail").textContent = email;

    // Toggle display
    document.getElementById("userForm").classList.add("hidden");
    document.getElementById("idCard").classList.remove("hidden");
});
