//Ejemplos de import/export
import React from 'react'

var Component = function() {}
export default Component

import Component from './component'



//Ejemplo de class
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }
}
export default MyComponent

//Arrow functions (a.k.a. lambdas)
var Component = function(nombre) {
  return "Hola " + nombre
}

var Component = (nombre) => "Hola " + nombre


//Template strings (con comillas invertidas, y los intros dentro son transpilados)
var Component = (nombre) => `Hola ${nombre}`