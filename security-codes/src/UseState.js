import React from 'react';
import {reducer, initialValue, actionTypes } from './reducer';

const SECURITY_CODE = 'paradigma';

function UseState ({ name }) {

  const [{ loading, value, confirmed, deleted, error}, dispatch] = React.useReducer(reducer, initialValue)

  // const [value, setValue] = React.useState('')
  // const [error, setError] = React.useState(false)
  // const [loading, setLoading] = React.useState(false)
  // const [deleted, setDeleted] = React.useState(false)
  // const [confirmed, setConfirmed] = React.useState(false)

  React.useEffect(()=> {

    if(loading) {
      // setError(false)
      dispatch({ type: actionTypes.RESET_ERROR })
      
      setTimeout(()=> {
        if(value !== SECURITY_CODE){
          // setError(true)
          dispatch({ type: actionTypes.ERROR })
        }
        else{
          dispatch({ type: actionTypes.VALIDATED })
        }
        // setValue('')
        // setConfirmed(true)
        // setLoading(false)
      }, 1000)
    }

  }, [loading])

  if(!confirmed && !deleted){
    return (
      <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      {error && <p>Error: El codigo es incorrecto</p>}
      {loading && <p>Cargando....</p>}
      <input 
        type="text" 
        placeholder='Codigo de Seguridad'
        onChange={(event)=>dispatch({ type: actionTypes.WRITE, payload: event.target.value })}  
        value={value}
      />
      <button onClick={()=>dispatch({ type: actionTypes.CHECK })}>Comprobar</button>
      </div>
    )
  }else if (confirmed && !deleted) {
    return (
      <>
        <p>Are you sure??</p>
        <button onClick={()=> dispatch({ type: actionTypes.DELETE }) } >Eliminar</button>
        <button onClick={()=> dispatch({ type: actionTypes.RESET }) }>Cancelar</button>
      </>
    )
  }
  else {
    return (
      <>
      <p>Deleted</p>
      <button onClick={()=> {
        dispatch({ type: actionTypes.RESET })
      }}>Back to Normal</button>
      </>
    )
  }
}

export { UseState }