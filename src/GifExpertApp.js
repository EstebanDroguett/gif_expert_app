import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Fullmetal Alchemist Brotherhood']);

    return(
        <>
        
        <h1 className="nes-text is-primary"><i className="nes-squirtle"></i> Gif Expert App <i className="nes-logo"></i></h1>
        <AddCategory setCategories={ setCategories }/>
        <br />

        <ol>
            { 
            categories.map( category => (
                <GifGrid 
                key={category}
                category={ category } />
            ))
            }
        </ol>

        </>
    )
}
