const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default todos
