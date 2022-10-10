import React from 'react';
import {Loading} from './Loading'

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor(props) {
    super(props) 
    this.name = props.name
    this.state = {
      value: '',
      error: false,
      loading: false,
    }
  }

  // componentDidMount() {
  //   this.setState(()=> ({ loading: true }))
  // }


  componentDidUpdate() {

    if(this.state.loading) {
      // this.setState({ error: false })

      setTimeout(()=> {
        if(SECURITY_CODE === this.state.value){
          this.setState({ loading: false, error: false })
        }else{
          this.setState({ loading: false, error: true })
        }
      }, 1000)

      // setTimeout(()=> {
      //   if(SECURITY_CODE !== this.state.value){
      //     this.setState({ error: true })
      //   }
      //   this.setState({ loading: false })
      // }, 1000)
    }
  }

  render () {
    const {error, value, loading} = this.state

    return (
      <div>
        <h2>Eliminar {this.name}</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {(error && !loading) && <p>Error: El codigo es incorrecto</p>}
        {loading && <Loading />}
        <input 
          type='text' 
          placeholder='Codigo de Seguridad'
          value={value}
          onChange={(event)=>{this.setState({ value: event.target.value })}}
        />
        <button onClick={()=> this.setState({ loading: true })}>Comprobar</button>
      </div>
    )
  }
}

export { ClassState }