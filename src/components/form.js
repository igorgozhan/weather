import React from 'react'

 const form = (props) => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Paris"/>
        <button>Получить погоду</button>
    </form>
)

export default form;