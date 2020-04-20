var input = document.getElementById("input").value;
var output = "";

function insertCharacters() {
var input = document.getElementById("input").value;
var output = "";

    var charInsert = document.getElementById("character_insert").value;
    var indexInsert = document.getElementById("index_insert").value;

    for (var i = 0; i < input.length; i++) {
        output += input[i];
        if (i % indexInsert == indexInsert - 1) {
            output += charInsert
        }
        // console.log(input[i]);
    }

    document.getElementById("input").value = output;
}

function replace() {
var input = document.getElementById("input").value;
var output = "";

    var rOld = document.getElementById("replace_old").value;
    var rNew = document.getElementById("replace_new").value;

    //var isRegex = document.getElementById("isRegex").checked;

    /*if (isRegex) {
        output = 
    } else {
        output = input.replace(rOld, rNew)
    }*/

    output = input.replace(rOld, rNew)

    if (output == input) {
        alert("\"" + rOld + "\" not found in original string. :(");
    }

    document.getElementById("input").value = output;

}

function reverseStr() {
var input = document.getElementById("input").value;
var output = "";

    output = input.split("").reverse().join("");

    var node = document.createTextNode(output);
    var wrapper = document.createElement("p"); 
    wrapper.appendChild(node)
    document.getElementById("history").appendChild(wrapper);

    document.getElementById("input").value = output;
}

function upper() {
var input = document.getElementById("input").value;
var output = "";

    output = input.trim();

    document.getElementById("input").value = output;
}

function lower() {
var input = document.getElementById("input").value;
var output = "";

    output = input.trim();

    document.getElementById("input").value = output;
}

function trimbutnotjusttrimbecausethatnameisntallowedforsomereason() {
var input = document.getElementById("input").value;
var output = "";

    output = input.trim();
    // alert(output.trim())
    document.getElementById("input").value = output;

}