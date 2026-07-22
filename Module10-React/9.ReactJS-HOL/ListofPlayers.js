import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 78 },
        { name: "Hardik Pandya", score: 45 },
        { name: "Ravindra Jadeja", score: 88 },
        { name: "Surya Kumar", score: 69 },
        { name: "Rishabh Pant", score: 91 },
        { name: "Bumrah", score: 55 },
        { name: "Shami", score: 72 },
        { name: "Siraj", score: 60 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h1>List of Players</h1>

            <h2>All Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <h2>Players with Score Below 70</h2>

            {below70.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}
        </div>
    );
}

export default ListofPlayers;