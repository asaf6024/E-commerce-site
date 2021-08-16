const products = [
    {
        id: 1,
        name: 'Cappuccino',
        description: 'Tasty Cappuccino',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        `,
        price: 10,
        img: '../img/coffee.jpg',
        sizes: [
            {
                name: 'small', price: '10', selected: true
            },
            {
                name: 'medium', price: '12', selected: false
            },
            {
                name: 'large', price: '15', selected: false
            }
        ]
    },
    {
        id: 2,
        name: 'black Coffee',
        description: 'Turkish Coffee',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    `,
        price: 8,
        img: '../img/black.jpg',
        sizes: [
            {
                name: 'small', price: '8', selected: true
            },
            {
                name: 'medium', price: '10', selected: false
            },
            {
                name: 'large', price: '12', selected: false
            }
        ]
    },
    {
        id: 3,
        name: 'Chocolate Milk',
        description: 'Tasty Chocolate Milk',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    `,
        price: 10,
        img: '../img/milk.jpg',
        sizes: [
            {
                name: 'small', price: '10', selected: true
            },
            {
                name: 'medium', price: '12', selected: false
            },
            {
                name: 'large', price: '15', selected: false
            }
        ]
    },
    {
        id: 4,
        name: 'Tea',
        description: 'Tasty Tea',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        `,
        price: 10,
        img: '../img/tea.jpg',
        sizes: [
            {
                name: 'small', price: '10', selected: true
            },
            {
                name: 'medium', price: '12', selected: false
            },
            {
                name: 'large', price: '15', selected: false
            }
        ]
    },
    {
        id: 5,
        name: 'Espresso',
        description: 'Tasty Espresso',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        `,
        price: 6,
        img: '../img/espresso.jpg',
        sizes: [
            {
                name: 'short', price: '6', selected: true
            },
            {
                name: 'medium', price: '8', selected: false
            },
            {
                name: 'long', price: '10', selected: false
            }
        ]
    },
    {
        id: 6,
        name: 'Americano',
        description: 'Tasty Americano',
        longDescription:
            `OLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        `,
        price: 10,
        img: '../img/americano.jpg',
        sizes: [
            {
                name: 'small', price: '10', selected: true
            },
            {
                name: 'medium', price: '12', selected: false
            },
            {
                name: 'large', price: '15', selected: false
            }
        ]
    },



]
export default products