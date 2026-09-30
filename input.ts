function getInfo() {
    const nameInput = document.getElementById("username") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const ageInput = document.getElementById("age") as HTMLInputElement;

    const name: string = nameInput.value;
    const email: string = emailInput.value;
    const age: string = ageInput.value;

    console.log("Username:", name);
    console.log("Email:", email);
    console.log("Age:", age);
}

const button = document.getElementById("getInfoBtn") as HTMLButtonElement;

button.addEventListener("click", getInfo);
