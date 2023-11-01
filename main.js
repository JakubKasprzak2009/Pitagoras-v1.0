const button = document.getElementById('calculate');

//event handling (click)
button.addEventListener("click", () => {
    //getting needed variables
    let result;
    let a = parseFloat(document.getElementById('a').value) || 0;
    let b = parseFloat(document.getElementById('b').value) || 0;

    //calculating
    a = Math.pow(a, 2);
    b = Math.pow(b, 2);

    result = a + b;
    result = Math.sqrt(result, 2);

    //display results
    document.write("c = " + result);
});