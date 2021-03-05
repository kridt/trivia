import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default function Category() {
    var [categories, setCategories] = useState({});
    
    var score = localStorage.getItem("currentScore");

    useEffect(
        function () {
            
                axios.get(`https://opentdb.com/api_category.php`)
                .then(response => setCategories(response.data));
                
                
            },
            [setCategories]
            );
            
   console.log(categories);

    return(
        <>
        <h1>Choose a category</h1>
        <h2>Your current score: {score}</h2>
        <ul className="categoriesList">
        
        {categories.trivia_categories?.map(function (category) {

            return(
                <Link key={category.id} to={"/questions/" + category.id}>
                    <li key={category.id}>{category.name}</li>
                </Link>
            )
        })}

        </ul>
        </>


)

}