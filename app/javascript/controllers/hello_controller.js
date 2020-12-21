// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name","output","output1" ]

  greet() {
    this.outputTarget.textContent =
      `ja tor ja tor ja , ${this.nameTarget.value}!`

     const name2 = this.outputTarget.textContent
     

    this.output1Target.textContent =
      `----from output , ${name2.value}!`
  }
}
