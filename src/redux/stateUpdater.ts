export const stateUpdater = (oldState: any, newState: any) => ({
    ...oldState,
    ...newState
})