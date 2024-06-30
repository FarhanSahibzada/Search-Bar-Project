let list = document.getElementById("list");
let lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
    var item = lis[i];

    item.style.display = "none";
}


function search() {
    let input = document.getElementById("input").value.toLowerCase();

    for (let i = 0; i < lis.length; i++) {

        let item = lis[i];
        let text = item.textContent.toLowerCase();
        if (input == "") {
            list.style.display = "none";
        } else {
            list.style.display = "block";

        }
        if (text.includes(input)) {
            item.style.display = "block";

        }
        else {
            item.style.display = "none";
        }
    }
}
