function welcomeMessage(fullName)
{
    return function ()
    {
        return alert("Welcome " + fullName);
    };
}
var guillaume = welcomeMessage("Guillaume")
var alex = welcomeMessage("Alex")
var fred = welcomeMessage("Fred")