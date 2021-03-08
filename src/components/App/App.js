import React, { Component } from 'react'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'
import ResultsContainer from '../ResultsContainer/ResultsContainer'

const name=require('@rstacruz/startup-name-generator')

export default class App extends Component {
    
    state={
        headerText:'Name It App!!',
        headerExpanded:true,
        suggestedNames:[]
    }

    handleInputChange = (inputText) => {
        // name(inputText)
        this.setState({
            headerExpanded:!inputText,
            suggestedNames:name(inputText)
        })
    }

    
    render() {
        
        // console.log(name('code'))

        return (
            <div>
              <Header headerText={this.state.headerText}
                      headerExpanded={this.state.headerExpanded}/>
              <SearchBox onInputChange={this.handleInputChange}/>
              <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}
