const food = [
    {
        id: 21,
        name: 'Margherita Pizza',
        description: 'Tasty Margherita',
        longDescription:
            `Outside of Italy, 
        cappuccino is a coffee drink that today 
        is typically composed of a single espresso shot and hot milk,
         with the surface topped with foamed milk.
          Cappuccinos are most often prepared with an espresso machine.
        `,
        price: 40,
        img: '../img/margarita.jpg',
        sizes: [
            {
                name: 'personal', price: '40', selected: true
            },
            {
                name: 'family', price: '55', selected: false
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
                name: 'small', price: '45', selected: true
            },
            {
                name: 'medium', price: '60', selected: false
            },
            {
                name: 'large', price: '90', selected: false
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
                name: 'small', price: '45', selected: true
            },
            {
                name: 'medium', price: '60', selected: false
            },
            {
                name: 'large', price: '90', selected: false
            }
        ]
    },
    // {
    //     id: 4,
    //     name: 'Tea',
    //     description: 'Tasty coffee',
    //     longDescription:
    //         `Outside of Italy, 
    //     cappuccino is a coffee drink that today 
    //     is typically composed of a single espresso shot and hot milk,
    //      with the surface topped with foamed milk.
    //       Cappuccinos are most often prepared with an espresso machine.
    //     `,
    //     price: 10,
    //     img: '../img/tea.jpg',
    //     sizes: [
    //         {
    //             name: 'small', price: '10', selected: true
    //         },
    //         {
    //             name: 'medium', price: '12', selected: false
    //         },
    //         {
    //             name: 'large', price: '15', selected: false
    //         }
    //     ]
    // },
    // {
    //     id: 5,
    //     name: 'Espresso',
    //     description: 'Tasty coffee',
    //     longDescription:
    //         `Outside of Italy, 
    //     cappuccino is a coffee drink that today 
    //     is typically composed of a single espresso shot and hot milk,
    //      with the surface topped with foamed milk.
    //       Cappuccinos are most often prepared with an espresso machine.
    //     `,
    //     price: 6,
    //     img: '../img/espresso.jpg',
    //     sizes: [
    //         {
    //             name: 'short', price: '6', selected: true
    //         },
    //         {
    //             name: 'medium', price: '8', selected: false
    //         },
    //         {
    //             name: 'long', price: '10', selected: false
    //         }
    //     ]
    // },
    // {
    //     id: 6,
    //     name: 'Americano',
    //     description: 'Tasty coffee',
    //     longDescription:
    //         `Outside of Italy, 
    //     cappuccino is a coffee drink that today 
    //     is typically composed of a single espresso shot and hot milk,
    //      with the surface topped with foamed milk.
    //       Cappuccinos are most often prepared with an espresso machine.
    //     `,
    //     price: 10,
    //     img: '../img/americano.jpg',
    //     sizes: [
    //         {
    //             name: 'small', price: '10', selected: true
    //         },
    //         {
    //             name: 'medium', price: '12', selected: false
    //         },
    //         {
    //             name: 'large', price: '15', selected: false
    //         }
    //     ]
    // },



]
export default food