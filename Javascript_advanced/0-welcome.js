function welcome(firstName, lastName)
{
    let fullName = firstName + lastName;
    function displayFullName(fullName)
    {
        console.log("Welcome " + fullName + "!")
    }
    displayFullName(fullName)
}