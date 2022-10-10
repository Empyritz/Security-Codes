const actionTypes = {
  ERROR: 'ERROR',
  CHECK: 'CHECK',
  RESET_ERROR: 'RESET_ERROR',
  VALIDATED: 'VALIDATED',
  RESET: 'RESET',
  DELETE: 'DELETE',
  WRITE: 'WRITE'
}

const ReducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    error: true,
    loading: false,
    value: ''
  },
  [actionTypes.CHECK]: {
    ...state,
    loading: true,
  },
  [actionTypes.RESET_ERROR]: {
    ...state,
    error: false
  },
  [actionTypes.VALIDATED]: {
    ...state,
    value: '',
    confirmed: true,
    loading: false
  },
  [actionTypes.RESET]: {
    deleted: false,
    confirmed: false,
    value: ''
  },
  [actionTypes.DELETE]: {
    ...state,
    deleted: true
  },
  [actionTypes.WRITE]: {
    ...state,
    value: payload
  }
})

const reducer = (state, action) => {
  if(ReducerObject(state)[action.type]){
    return ReducerObject(state, action.payload)[action.type]
  }else {
    return {...state}
  }
}

const initialValue = {
  loading: false,
  error: false,
  value: '',
  deleted: false,
  confirmed: false
}


export { reducer, initialValue, actionTypes }