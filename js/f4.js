var div = document.getElementById("output");
var table = document.createElement("table");
var tbody = document.createElement("tbody");
for (i=1; i<=12; i++)
{
    var row = document.createElement("tr");
    if (i%4==0)
    {
        row.className= "divBy4";
    }
    var tdata = document.createElement("td");
    var num = document.createTextNode(i);

    tdata.appendChild(num);
    row.appendChild(tdata);
    tbody.appendChild(row);
}
table.appendChild(tbody);
div.appendChild(table);
table.setAttribute("border", "1");
