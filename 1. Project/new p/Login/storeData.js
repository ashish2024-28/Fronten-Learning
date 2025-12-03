// store the data of user
let Admin = [
    {
        email: "ashishkumar.bcse2024@huroorkee.ac.in",
        password: "ashishkumar"
    }, {
        email: "aryanraj1.bcse2024@huroorkee.ac.in",
        password: "aryanraj1"
    }
]
let Security = [
    {
        email: "ashishkumar.bcse2024@huroorkee.ac.",
        password: "ashishkumar"
    }, {
        email: "aryanraj1.bcse2024@huroorkee.ac.",
        password: "aryanraj1"
    }
]
let Student = [
    {
        email: "ashishkumar.bcse2024@huroorkee.",
        password: "ashishkumar"
    }, {
        email: "aryanraj1.bcse2024@huroorkee.",
        password: "aryanraj1"
    }
]

// Get the select element

// Get the selected value
// let selectedValue = userSelect.value;


var userSelect = null;
function getUser() {
    userSelect = document.getElementById("userselect").value;
    console.log(userSelect)
}
console.log(userSelect)
function Verify() {
    userSelect = document.getElementById("userselect").value;

    console.log(userSelect)
    verify(Admin);
}
