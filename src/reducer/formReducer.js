const formInitialState = []

const formReducer = (state = formInitialState, action) => {
    switch(action.type) {
        case 'ADD_POST': {
            return [].concat(action.payload)
        }

        default: {
            return [].concat(state)
        }
    }
}

export default formReducer