function getUserName() {
    var nameField = document.getElementById('name').value;
    console.log(nameField);

    //document.getElementById("demo").innerHTML = nameField;
    
    // var result = document.getElementById('result');

    // if (nameField.length < 3) {
    //     result.textContext = 'Username must contain atleast 3 characters';
    //     console.log('Username must contain atleast 3 characters');
    // } else {
    //     result.textContext = 'Your username is: ' + nameField;
    // }
}
getUserName();

var subButton = document.getElementById('submit');
subButton.addEventListener("click", getUserName(), false);