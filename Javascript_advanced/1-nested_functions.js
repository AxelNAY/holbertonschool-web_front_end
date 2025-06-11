var globalVariable = "Welcome"
function outer(globalVariable)
{
    alert(globalVariable)
    let course = "Holberton"
    function inner(course)
    {
        alert(globalVariable + course);
        let exclamation = "!";
        function inception(exclamation)
        {
            alert(globalVariable + course + exclamation)
        }
        inception(exclamation);
    }
    inner(course);
}
outer(globalVariable);