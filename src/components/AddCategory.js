import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats]);
            setinputValue('');
        }

    }

    return (
        <form className="nes-field" onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
                id="inline_field" 
                className="nes-input is-success" 
                placeholder="Buscar Gif"
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}


