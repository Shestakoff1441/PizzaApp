export interface IPizzaProps {
    image: string,
    title: string,
    price: number,
    size: string | undefined,
    type: string | undefined,
    amount: number
}

export interface ITypeAndSize {
    [key: string]: boolean
}

export interface IAddPizza {
    [key: string]: {
        price: number,
        amount: number,
        image: string,
        size: string,
        type: string,
        title: string
    }
}

export interface IPizzaState {
    [key: string]: {
        price: number,
        amount: number,
        image: string,
        size: string,
        type: string,
        title: string
    }
}

export interface State {
    shoppingReducer: {
        shoppingCart: {
            [key: string]: {
                price: number,
                amount: number,
                image: string,
                size: string,
                type: string,
                title: string
            }
        }
    },
}

export interface IIncrOrDecr {
    type: string ,
    key: string
}