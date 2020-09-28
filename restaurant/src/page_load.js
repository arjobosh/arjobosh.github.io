import { Item } from './Item';

let content = document.getElementById('content');
let main = document.createElement('div');
main.className = 'main';

const createHeading = (text) => {
    let h = document.createElement('h1');
    h.style.font = '1.5em bold Helvetica, sans-serif';
    h.style.padding = '10px 0';
    h.style.textAlign = 'center';
    h.innerHTML = text;
    return h;
}

const home = () => {
    let splash = document.createElement('div');
    splash.className = 'splash';
    
    let heading = createHeading('the white glyph.');

    let blurb = document.createElement('h3');
    blurb.style.margin = '10px 0';
    blurb.innerHTML = 'a local   coffee & tea shop ';

    let image = document.createElement('img');
    image.src = '../coffee_cup.jfif';
    image.style.width = '200px';
    image.style.height = '200px';
    image.style.borderRadius = '50%';
    image.style.margin = '10px 0';

    splash.style.display = 'flex';
    splash.style.flexFlow = 'column wrap';
    splash.style.alignItems = 'center';
    

    clearMain();
    splash.appendChild(heading);
    splash.appendChild(blurb);
    splash.appendChild(image);
    main.appendChild(splash);

    content.appendChild(main);
}

const contact = () => {
    let heading = createHeading('keep in touch.');

    let email = {
        tag: 'support@thewhiteglyph.com',
        link: 'mailto:support@thewhiteglyph.com',
        img: '../email.png'
    }

    let insta = {
        tag: '@thewhiteglyph',
        link: 'https://www.instagram.com',
        img: '../insta.png',
    }

    let twitta = {
        tag: '@thewhiteglyph',
        link: 'https://www.twitter.com',
        img: '../twitta.png',
    }

    let facebook = {
        tag: '@thewhiteglyph',
        link: 'https://www.facebook.com/',
        img: '../facebook.png',
    }

    let location = {
        tag: 'las vegas, nv 89139',
        link: '#',
        img: '../location.png',
    }

    let socials = [email, insta, twitta, facebook, location];
    let socialsContainer = document.createElement('div');
    socialsContainer.className = 'socials-container';

    socials.forEach(e => {
        let s = document.createElement('div');
        s.className = 'social-card';
        let i = document.createElement('img');
        i.src = e.img;
        i.style.width = '4%';
        i.style.height= '4%';
        let a = document.createElement('a');
        a.href = e.link;
        a.innerHTML = e.tag;
        a.style.margin = '0 10px';

        s.style.display = 'flex';
        s.style.alignItems = 'center';
        s.style.justifyContent = 'center';
        s.style.margin = '10px 0';

        s.appendChild(i);
        s.appendChild(a);
        socialsContainer.appendChild(s);
    })

    clearMain();
    main.appendChild(heading);
    main.appendChild(socialsContainer);
    content.appendChild(main);
}

const menu = () => {
    let heading = createHeading('menu.');

    let coffee = new Item('coffee',
    'a simple, hot cup of coffee',
    1.29);

    let tea = new Item('tea',
    'a simple, hot cup of tea',
    1.29);

    let icedcoffee = new Item('iced coffee',
    'a cold, refreshing iced coffee',
    2.29);

    let icedtea = new Item('iced tea',
    'a cold, refreshing iced tea',
    2.29);
    
    clearMain();
    main.appendChild(heading);
    main.appendChild(coffee.createMenuItemCard());
    main.appendChild(tea.createMenuItemCard());
    main.appendChild(icedcoffee.createMenuItemCard());
    main.appendChild(icedtea.createMenuItemCard());

    content.appendChild(main);  
}

function clearMain() {
    main.innerHTML = '';
}

export { home, contact, menu };