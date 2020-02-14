function reponsiveMenu() {
    var x = document.getElementById("myheader_nav");
    if (x.className === "header_nav") {
        x.className += " responsive";
    } else {
        x.className = "header_nav";
    }
}

function showAllImg() {
    resetColorbtn();
    for (var i = 1; i < 7; i++) {
        document.getElementById("img" + i).style.display = 'block';
    }
    document.getElementById('btn1').style.color = 'rgb(238, 189, 55)';
}

function hideAllImg() {
    for (var i = 1; i < 7; i++) {
        document.getElementById("img" + i).style.display = 'none';
    }
}

function resetColorbtn() {
    for (var i = 1; i <= 5; i++) {
        document.getElementById("btn" + i).style.color = 'white';
    }
}

function showImg(name) {
    resetColorbtn();
    hideAllImg();
    var arr = [];
    switch (name.toString()) {
        case "all":
            for (var i = 1; i < 7; i++) {
                document.getElementById("img" + i).style.display = 'block';
            };
            document.getElementById('btn1').style.color = 'rgb(238, 189, 55)';
            break;
        case "brand":
            arr = ["img1", "img2", "img3", "img6"];
            arr.map(elm => document.getElementById(elm).style.display = 'block');
            document.getElementById('btn2').style.color = 'rgb(238, 189, 55)';
            break;
        case "graphic":
            arr = ["img2", "img5", "img1", "img4"];
            arr.map(elm => document.getElementById(elm).style.display = 'block');
            document.getElementById('btn3').style.color = 'rgb(238, 189, 55)';
            break;
        case "nature":
            arr = ["img1", "img4", "img6", "img3"];
            arr.map(elm => document.getElementById(elm).style.display = 'block');
            document.getElementById('btn4').style.color = 'rgb(238, 189, 55)';
            break;
        case "animation":
            arr = ["img4", "img3", "img1", "img2"];
            arr.map(elm => {
                document.getElementById(elm).style.display = 'block';
            });
            document.getElementById('btn5').style.color = 'rgb(238, 189, 55)';
            break;
        default:
            break;
    }
}

function hidAllBlogPost() {
    for (var i = 1; i < 5; i++) {
        document.getElementById("blogPost" + i).style.display = 'none';
    }
}

function resetColorBlog() {
    for (var i = 1; i < 5; i++) {
        document.getElementById("btn_blogPost" + i).style.color = 'black';
    }
}

function showBlogPost(name) {
    hidAllBlogPost();
    resetColorBlog();
    switch (name) {
        case 'blogPost1':
            document.getElementById('blogPost1').style.display = 'flex';
            document.getElementById('btn_blogPost1').style.color = 'rgb(238, 189, 55)';
            break;
        case 'blogPost2':
            document.getElementById('blogPost2').style.display = 'flex';
            document.getElementById('btn_blogPost2').style.color = 'rgb(238, 189, 55)';
            break;
        case 'blogPost3':
            document.getElementById('blogPost3').style.display = 'flex';
            document.getElementById('btn_blogPost3').style.color = 'rgb(238, 189, 55)';
            break;
        case 'blogPost4':
            document.getElementById('blogPost4').style.display = 'flex';
            document.getElementById('btn_blogPost4').style.color = 'rgb(238, 189, 55)';
            break;
        default:
            break;
    }
}

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

function getScroll() {
    if (window.pageYOffset != undefined) {
        if (pageYOffset > 50) {
            document.getElementById("myheader_nav").style.backgroundColor = "rgba(250, 250, 250, 0.98)";
            document.getElementById("myheader_nav").style.color = "black";
            document.getElementById("icon").style.color = "white";
            document.getElementById("iconCollaps").style.backgroundColor = 'rgb(238, 189, 55)';

        } else {
            document.getElementById("myheader_nav").style.background = "none";
            document.getElementById("myheader_nav").style.color = "white";
            document.getElementById("icon").style.color = "white";
            document.getElementById("iconCollaps").style.background = 'none';
        }
    }
}