class shoe {
    constructor (type, style){
        this.type = type;
        this.style = style;


    }
    describe() {
        return `${this.type} type of style ${this.style}`
    }



}

class Menu{
    constructor(){
        this.shoes = []

    }

    createShoe() {
        const newShoe = new shoe(
          prompt("Enter shoe brand: "),
          prompt("Enter shoe style: ")
        )
        this.shoes.push(newShoe);
        }


        viewShoe(){
            let index = prompt ('Enter th index of the shoe you wish to view');
            if

            



        }









    
}
const menu = new Menu();
menu.createShoe() 

menu.createShoe() 
console.log(menu.shoes)

  
  