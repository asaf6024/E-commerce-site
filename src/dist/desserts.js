const desserts = [
    {
        id: 31,
        name: 'Ice Cream',
        description: 'Tasty Ice Cream',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        `,
        price: 15,
        img: '../img/iceCream.jpg',
        sizes: [
            {
                name: 'cup', price: '15', selected: true
            },
            {
                name: 'glass', price: '20', selected: false
            },
            {
                name: 'x-large', price: '30', selected: false
            }
        ]
    },
    {
        id: 32,
        name: 'Chocolate Souffle',
        description: 'Tasty Chocolate Souffle',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        `,
        price: 20,
        img: '../img/souffle.jpg',
        sizes: [
            {
                name: 'small', price: '20', selected: true
            },
            {
                name: 'medium', price: '30', selected: false
            },
            {
                name: 'x-large', price: '40', selected: false
            }
        ]
    },
    {
        id: 33,
        name: 'Cheese Cake',
        description: 'Tasty Cheese Cake',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        `,
        price: 15,
        img: '../img/cheeseCake.jpg',
        sizes: [
            {
                name: 'small', price: '15', selected: true
            },
            {
                name: 'medium', price: '20', selected: false
            },
            {
                name: 'x-large', price: '30', selected: false
            }
        ]
    },



]
export default desserts