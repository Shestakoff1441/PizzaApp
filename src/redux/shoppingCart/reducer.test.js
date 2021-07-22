import { shoppingReducer } from './reducer';
import { setShoppingCart } from './actions'

describe('Set shopping cart data', () => {
    let initialState;
    let initItem;
    beforeEach(() => {
        initialState = {
            shoppingCart: {},
        };
        initItem = {
            'Сырная тонкое 26': {
                image: '',
                price: 445,
                size: '26',
                title: 'Чизбургер пицца',
                type: 'тонкое',
                amount: 1
            }
        }
    })
    test('New item should be added in empty store', () => {
        let action = setShoppingCart(initItem)
        let newState = shoppingReducer(initialState, action);
        expect(Object.keys(newState).length).toBe(1)
    });

    test('New item should be added in existing store', () => {
        let existingState = {
            shoppingCart: {
                ...initItem
            }
        };
        let data = {
            image: '',
            price: 445,
            size: '26',
            title: 'Сырная',
            type: 'тонкое',
            amount: 1
        }
        const itemKey = 'Сырная тонкое 30';
        let action;
        if (!existingState.shoppingCart.hasOwnProperty(itemKey)) {
            action = setShoppingCart({
                ...existingState.shoppingCart,
                [itemKey]: {
                    ...data,
                    amount: 1
                }
            });
        }
        let newState = shoppingReducer(existingState, action);
        expect(Object.keys(newState.shoppingCart).length).toBe(2);
    });

    test('Add new item with same  key', () => {
        let existingState = {
            shoppingCart: {
                ...initItem
            }
        };
        let data = {
            image: '',
            price: 445,
            size: '26',
            title: 'Сырная',
            type: 'тонкое',
            amount: 1
        }
        const itemKey = 'Сырная тонкое 26';
        let action;
        if (itemKey in existingState.shoppingCart) {
            action = setShoppingCart({
                ...existingState.shoppingCart,
                [itemKey]: {
                    ...data,
                    amount: existingState.shoppingCart[itemKey].amount + 1
                }
            });
        }
        let newState = shoppingReducer(existingState, action);
        //Check quantity of elements
        expect(Object.keys(newState).length).toBe(1);
        //Check amount
        expect(newState.shoppingCart[itemKey].amount).toEqual(2)
    })

    test('Item should contain required properties', () => {
        const requiredProps = ['image', 'price', 'size', 'title', 'type', 'amount'];
        for (let item of requiredProps) {
            expect(initItem['Сырная тонкое 26']).toHaveProperty(item)
        }
    })
})