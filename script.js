let table = document.getElementById("my_table");
let output = "";
for (let i = 1; i <= 10; i++) {
    output += "<tr>";
    for (let j = 1; j <= 10; j++) {
        if (i == 1 && j == 1) {
            output += "<th>&times;</th>";
        } else {
            if (i == 1 || j == 1) {
                output += "<th>" + i * j + "</th>";
            } else {
                output += "<td>" + i * j + "</td>";
            }
        }

    }
    output += "</tr>";
}

table.innerHTML = output;