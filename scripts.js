var undoString = document.getElementById("input").value;
function addToHistory(output) {
    var input = document.getElementById("input").value;
    undoString = input;
    //if nothing changed don't add to edit history
    if (input == output){
       return; 
    }
    var node = document.createTextNode(output);
    var wrapper = document.createElement("p");
    wrapper.appendChild(document.createElement("br"))
    wrapper.appendChild(node)
    document.getElementById("history").prepend(wrapper);
}

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

    addToHistory(output);
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

    addToHistory(output);
    document.getElementById("input").value = output;

}

function reverseStr() {
    var input = document.getElementById("input").value;
    var output = "";

    output = input.split("").reverse().join("");

    addToHistory(output);
    document.getElementById("input").value = output;
}

function upper() {
    var input = document.getElementById("input").value;
    var output = "";

    output = input.toUpperCase();
    
    addToHistory(output);
    document.getElementById("input").value = output;
}

function lower() {
    var input = document.getElementById("input").value;
    var output = "";

    output = input.toLowerCase();

    addToHistory(output);
    document.getElementById("input").value = output;
}

function trimbutnotjusttrimbecausethatnameisntallowedforsomereason() {
    var input = document.getElementById("input").value;
    var output = "";

    output = input.trim();
    // alert(output.trim())

    addToHistory(output);
    document.getElementById("input").value = output;

}

function resetEverything(){
  var c = confirm("Are you sure? EVERYTHING will be gone, including edit history.") 
  if(c){
      document.getElementById("form").reset();
      document.getElementById("history").innerHTML = "";
      return true
  }
//   else{
//       return false
//   }
}

function undoAction(){
    document.getElementById("input").value = undoString;
    //Add the thing to history but not to undo value because things are confusing
    var input = document.getElementById("input").value;
    //if nothing changed don't add to edit history
    var node = document.createTextNode(input);
    var wrapper = document.createElement("p");
    wrapper.appendChild(document.createElement("br"))
    wrapper.appendChild(node)
    document.getElementById("history").prepend(wrapper);
}