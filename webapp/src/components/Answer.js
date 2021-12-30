import React, { useEffect, useState } from "react";

export default function Answer() {

    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        fetch('https://women-in-tech.apievangelist.com/apis/people/')
        .then(response => response.json())
        .then(responseData => {
            setAnswer(responseData);
        });
    }, [])


    const quizResult = answer.map((steminist, index) => 
            <p> {steminist.name}</p>
   )

    return(
        <div>
            <h2>Your STEMinist hero is</h2>
            <div></div>
        </div>

    )
}