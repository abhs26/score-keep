// import './../imports/utils'

import React from "../node_modules/react"
import ReactDom from "../node_modules/react-dom"
import {Meteor} from 'meteor/meteor'


const players =[{
    _id:'1',
    name:'shruti',
    score:'99'
},
    {
        _id:'2',
        name:'Abhishek',
        score:'-4'
    },
    {
        _id:'3',
        name:'abhi',
        score:'-4'
    }];

const renderPlayers = function (playerList) {
    
    return playerList.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} points</p>;
        
    });
    
};

Meteor.startup(function () {
    let title = 'Score keep';
    let name = 'Abhishek';
    let jsx = (<div>
        <h1>{title}</h1>
            <p>Hello {name} !</p>
            {renderPlayers(players)}
        </div>
       );
    ReactDom.render(jsx,document.getElementById('app'));
});