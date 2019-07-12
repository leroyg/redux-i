import { MAKE_DEPOSIT, MAKE_WITHDRAWAL } from './actions'

// all state values need an initial value
const initialState = {
    checking: 0,
    savings: 0,
    accountActivity: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case MAKE_DEPOSIT: {
            const { amount, account, description } = action.payload
            const newAmount = parseInt(amount) + state[account]
            const newActivity = state.accountActivity.concat([
                //adding more data to the description before hitting store
                `${new Date()}, ${description}, ${amount}`,
            ])

            return {
                ...state,
                [account]: newAmount,
                accountActivity: newActivity,
            }
        }

        // same as MAKE_DEPOSIT but adjusted to add vice subtract
        case MAKE_WITHDRAWAL: {
            const { amount, account, description } = action.payload
            const newAmount = state[account] - parseInt(amount)
            const newActivity = state.accountActivity.concat([
                // adding descriptive info before hitting store
                `${new Date()}, ${description}, -${amount}`,
            ])

            return {
                ...state,
                [account]:newAmount,
                accountActivity: newActivity,
            }
        }        

        default:
            return state
    }
}