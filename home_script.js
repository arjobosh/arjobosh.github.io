const h1 = document.querySelector('h1');
h1.style.fontFamily = 'helvetica';
h1.style.fontStyle = 'oblique';
h1.style.margin = 'auto';
h1.style.textAlign = 'center';

const body = document.querySelector('body');
body.style.backgroundColor = '#c3ebd0';
body.style.margin = 'auto';//'50px 200px 50px 200px';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.fontFamily = 'helvetica';

const main = document.querySelector('.main');
main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.margin = '30px auto 30px auto';
main.style.width = '60%';

const h2 = document.getElementsByTagName('h2');
for(i = 0; i < h2.length; i++) {
    h2[i].style.fontFamily = 'helvetica';
    h2[i].style.margin = '0px';
    h2[i].style.width = '25%';
    h2[i].style.textDecoration = 'overline';
}

/*const left = document.querySelector(".left");
left.style.display = 'flex';
left.style.flexDirection = 'column';
left.style.width = '50%';

const right = document.querySelector(".right");
right.style.display = 'flex';
right.style.flexDirection = 'column';
right.style.width = '50%';

const content = document.getElementsByClassName('content');
for (i = 0; i < content.length; i++) {
    //content[i].style.width = '400px';
    //content[i].style.float = 'right';
    //content[i].style.marginLeft = '0px';
    //content[i].style.fontFamily = 'helvetica';
}*/