console.log("hello world");
const onload = (e => {
    
    var uid = localStorage.getItem("uid");
    var div = document.getElementById("prof");
    var div2 = document.getElementById("mukh");
    if (uid == null) {
        console.log("no uid");
        div.style.display = "none";
        div2.style.display = "block";
    } else {
        console.log("uid here");
        console.log(uid);
        div.style.display = "block";
        div2.style.display = "none";
    }
});
