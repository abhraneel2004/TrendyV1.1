console.log("hello world");
const onload = (e => {
    console.log("hello world 2");
    var uid = localStorage.getItem("uid");
    var div = document.getElementById("prof");
    var div2 = document.getElementById("mukh");
    if (uid == null) {
        console.log("no uid");
        div.style.opacity = 0;
        div2.style.opacity = 1;
    } else {
        console.log("uid here");
        console.log(uid);
        div.style.opacity = 1;
        div2.style.opacity = 0;
    }
});
