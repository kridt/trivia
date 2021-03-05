import React, { Component } from "react";
import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { Link } from "@reach/router";

export default function Category() {
    var [categories, setCategories] = useState({});
    
    

    useEffect(
        function () {
            
                axios.get(`https://opentdb.com/api_category.php`)
                .then(response => setCategories(response.data));
                
                
            },
            [setCategories]
            );
            
   

    return(
        <>
        <h1>Choose a category</h1>
        <ul className="categoriesList">
        
        {categories.trivia_categories?.map(function (category) {

            return(
                <Link key={category.id} to={"/Questions/" + category.id}>
                    <li key={category.id}>{category.name}</li>
                </Link>
            )
        })}

        </ul>
        </>


)
}