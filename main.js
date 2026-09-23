// grab second for math stuffs
const timestamp = Math.round(Date.now() / 1000) * 1000;

// do name related stuff
// add a bunch of spans after the intro in "name" to do some fancy text stuff

let parent = document.getElementById("fancy-name");
let name = parent.innerHTML;
parent.innerHTML = "";
for (let i = 0; i < name.length; i++) {
    let letter = document.createElement("span");
    letter.innerHTML = name[i];
    parent.appendChild(letter);
}

// make letters change size
// create a cursor that moves down that pushes nearby letters up
setInterval(
    () => {
        let cursor = (Date.now() - timestamp)*5/1000 % (name.length + 30); // position from 0 to name.length then wait 10 letter times
        for (let i = 0; i < parent.children.length; i++) {
            let scale = 0;
            let distance = Math.abs(cursor - (i + 5));
            if (distance < 3) {
                scale = 1 + Math.cos((cursor - (i + 5)) * Math.PI / 3);
                // scale = 1;
            }
            parent.children[i].style = "font-size: " + String(1 - 1 / 4 * scale) + "em;";
        }
    }
    , 10);