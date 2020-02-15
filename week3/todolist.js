var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "IMG") {
       var div = ev.target.parentNode;
       div.remove();
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t); 
    if(inputValue == "") {
       alert("Enter your task!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement("IMG");
        span.setAttribute("src","https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png");
        span.className = "close";
        li.appendChild(span);
}