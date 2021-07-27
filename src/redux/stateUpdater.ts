interface IStateUpdater {
    shoppingCart:{
        [key:string]: object
    }
}

export const stateUpdater = (oldState: IStateUpdater, newState: IStateUpdater) => {
    return {
        ...oldState,
        ...newState
    }
}