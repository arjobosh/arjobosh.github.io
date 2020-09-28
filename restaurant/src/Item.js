class Item {
    constructor(name, description, price) {
        this.meta = { name, description, price };
        this.name = name;
        this.description = description;
        this.price = price;
    }

    get item() {
        return this.meta
    }

    set itemImage(source) {
        this.itemImage = source;
    }

    createMenuItemCard() {
        let itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        let namePrice = document.createElement('div');
        let itemName = document.createElement('span');
        itemName.innerHTML = this.name;
        let itemDescription = document.createElement('span');
        itemDescription.innerHTML = this.description;
        let itemPrice = document.createElement('span');
        itemPrice.innerHTML = this.price;
    
        namePrice.style.display = 'flex';
        namePrice.style.justifyContent = 'space-between';
    
        namePrice.appendChild(itemName);
        namePrice.appendChild(itemPrice);
    
        itemCard.appendChild(namePrice);
        itemCard.appendChild(itemDescription);
    
        return itemCard;
    }
}


export { Item };