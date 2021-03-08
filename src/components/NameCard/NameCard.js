import React from 'react';
import './NameCard.css'

const nameCheapUrl="https://www.namecheap.com/domains/registration/results/?domain="

const NameCard = ({suggestedName})=>{
    
    return (
        <a className="name-link" href={`${nameCheapUrl}${suggestedName}`}>
            <div className="name-card-div">
                <p className="name-card">{suggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard;