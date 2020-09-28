import { home, contact, menu } from './page_load';

let content = document.getElementById('content');
let nav = document.createElement('header');
nav.className = 'nav';

const createNavTabs = (labels=[], listName='') => {
    let list = document.createElement('ul');
    list.className = listName;

    labels.forEach(label => {
        let item = document.createElement('li');
        let link = document.createElement('a');
        
        item.className = 'tab';

        link.innerHTML = label;
        link.href = '#';
    
        item.addEventListener('click', () => {
            if (label === 'home') {
                home();
            }
            else if (label === 'contact') {
                contact();
            }
            else if (label === 'menu') {
                menu();
            }
            else {
                console.log('no function');
            }
        });
        
        item.appendChild(link);
        list.appendChild(item);
    });

    return list;
}

const tabs = () => {
    let tabs = ['menu', 'home', 'contact'];
    let tabList = createNavTabs(tabs, 'tab-list');

    nav.appendChild(tabList);
    content.appendChild(nav);
}


tabs();
home();