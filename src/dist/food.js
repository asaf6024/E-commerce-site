const food = [
    {
        id: 21,
        name: 'Margherita Pizza',
        description: 'Tasty Margherita',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        `,
        price: 40,
        img: '../img/margarita.jpg',
        sizes: [
            {
                name: 'personal', price: '40', selected: true
            },
            {
                name: 'family', price: '60', selected: false
            },
            {
                name: 'x-large', price: '80', selected: false
            }
        ]
    },
    {
        id: 22,
        name: 'Neapolitan Pizza',
        description: 'Tasty Neapolitan',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    `,
        price: 45,
        img: '../img/neapolitan.jpg',
        sizes: [
            {
                name: 'personal', price: '45', selected: true
            },
            {
                name: 'family', price: '70', selected: false
            },
            {
                name: 'x-large', price: '90', selected: false
            }
        ]
    },
    {
        id: 23,
        name: 'Greek Pizza',
        description: 'Tasty Greek',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    `,
        price: 45,
        img: '../img/greek.jpg',
        sizes: [
            {
                name: 'personal', price: '45', selected: true
            },
            {
                name: 'family', price: '65', selected: false
            },
            {
                name: 'x-large', price: '85', selected: false
            }
        ]
    },
    {
        id: 24,
        name: 'Greek Salad',
        description: 'Tasty Greek Salad',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        `,
        price: 30,
        img: '../img/greekSalad.jpg',
        sizes: [
            {
                name: 'medium', price: '30', selected: false
            },
            {
                name: 'large', price: '45', selected: false
            }
        ]
    },
    {
        id: 25,
        name: 'Caesar Salad',
        description: 'Tasty Caesar Salad',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        `,
        price: 35,
        img: '../img/caesar.jpg',
        sizes: [
            {
                name: 'medium', price: '35', selected: false
            },
            {
                name: 'large', price: '50', selected: false
            }
        ]
    },
    {
        id: 26,
        name: 'Chicken Salad',
        description: 'Tasty Chicken Salad',
        longDescription:
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .
        `,
        price: 45,
        img: '../img/chicken.jpg',
        sizes: [
            {
                name: 'medium', price: '45', selected: false
            },
            {
                name: 'large', price: '60', selected: false
            }
        ]
    },



]
export default food