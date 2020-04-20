function insertCharacters() {
    var charInsert = document.getElementById("character_insert").value;
    var indexInsert = document.getElementById("index_insert").value;
    var input = document.getElementById("input").value;
    var output = "";

    for(var i = 0;i<input.length;i++){
        output += input[i];
        if(i%indexInsert==indexInsert-1){
            output+=charInsert
        }
        // console.log(input[i]);
    }

    document.getElementById("output").value = output;
}

function replace() {
    var rOld = document.getElementById("replace_old").value;
    var rNew = document.getElementById("replace_new").value;
    var input = document.getElementById("input").value;
    var output = "Hello World!";

    //var isRegex = document.getElementById("isRegex").checked;

    /*if (isRegex) {
        output = 
    } else {
        output = input.replace(rOld, rNew)
    }*/

    output = input.replace(rOld, rNew)

    if(output == input){
        alert("\"" + rOld + "\" not found in original string. :(");
    }

    document.getElementById("output").value = output;

}