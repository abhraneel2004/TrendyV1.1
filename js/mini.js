
const onload = (e => {
    var uid = localStorage.getItem("uid");
    var div = document.getElementById("prof");
    var div2 = document.getElementById("mukh");
    if (uid == null) {
        div.style.display = "none";
        div2.style.display = "block";
    } else {
        div.style.display = 'block';
        div2.style.display = 'none';
    }
});
