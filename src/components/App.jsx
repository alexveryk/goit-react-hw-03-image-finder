import React, { Component } from 'react';
import { ContainerApp } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';

// import { Button } from './Button/Button';

export class App extends Component {
  state = {};

  render() {
    return (
      <ContainerApp>
        <Searchbar />
      </ContainerApp>
    );
  }
}
