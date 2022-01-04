import React, { useEffect, useState } from "react";

export default function Answer() {
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    fetch("https://women-in-tech.apievangelist.com/apis/people/")
      .then((response) => response.json())
      .then((responseData) => {
        setAnswer(responseData);
      });
  }, []);

  const items = answer.length;

  const randomNr = Math.floor(Math.random() * items);
  let randomName = "";
  let description = "";

  answer.map((steminist, index) => {
    randomName = answer[randomNr].name;
    description = answer[randomNr].details;
  });

  return (
    <div className="default">
      <h2>Your STEMinist hero is</h2>
      <div>
        <p>{randomName}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}