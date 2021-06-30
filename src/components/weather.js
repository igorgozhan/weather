import React from 'react'

const weather = (props) =>(
    <div className="infoWeath">
        { props.city &&
        <div>
            <p>Местоположение: {props.city}, {props.country}</p>
            <p>Температура: {props.temp}</p>
            <p>Закат солнца: {props.sunset}</p>
        </div>
        }
        <p className="error">{ props.error }</p>
    </div>
)

export default weather;