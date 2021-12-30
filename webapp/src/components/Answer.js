import React, { useEffect, useState } from "react";

export default function Answer() {

    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        fetch('https://women-in-tech.apievangelist.com/apis/people/')
        .then(response => response.json)
        .then(responseData => {
            setAnswer(responseData.name);
        });
    }, [])

    return(
        <div>
            Your STEMinist hero is {answer}
        </div>

    )
}