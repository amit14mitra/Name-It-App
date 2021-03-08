import React from 'react';
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'

const ResultsContainer = ({suggestedNames})=>{
    
    const nameSuggestions = suggestedNames.map((suggestedName)=>{
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })

    console.log(suggestedNames)
    return (
        <div className="result-container"> {nameSuggestions} </div>
    )
}

export default ResultsContainer;