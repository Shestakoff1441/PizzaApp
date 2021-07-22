import { getPriceAndAmount } from "./utils";

describe('Getting correct data', () => {
    let items;
    beforeEach(() => {
        items = {
            'Сырная тонкое 26': {
                image: '',
                price: 100,
                size: '26',
                title: 'Чизбургер пицца',
                type: 'тонкое',
                amount: 1
            },
            'Сырная традиционное 40': {
                image: '',
                price: 100,
                size: '40',
                title: 'Чизбургер пицца',
                type: 'традиционное',
                amount: 4
            },
            'Креветки традиционное 40': {
                image: '',
                price: 100,
                size: '40',
                title: 'Креветки',
                type: 'традиционное',
                amount: 1
            },
        }
    });
    test('Getting sum of pizza and total price', () => {
        expect(getPriceAndAmount(items)).toEqual({
            price: 600,
            amount: 6
        })
    })
})