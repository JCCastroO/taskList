import React, { Component } from "react";
import { TarefaProvider } from "./src/context/TarefaContext";

import Index from './src/Index'

export default class App extends Component {
  render() {
    return (
      <TarefaProvider>
        <Index />
      </TarefaProvider>
    )
  }
}