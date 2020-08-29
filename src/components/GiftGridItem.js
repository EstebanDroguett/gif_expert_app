import React from 'react'

export const GiftGridItem = ({ title, url }) => {


    return (
        <div className="card animate__animated animate__heartBeat nes-container is-rounded is-dark">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
