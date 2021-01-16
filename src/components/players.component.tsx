import React from 'react';
import { InputComponent } from './input.component';

interface PlayersProps {
    className: string;
    players: string[];
}

function renderPlayerInput(players: string[]): JSX.Element {
    return (
        <tr key='players'>
            <td></td>
            {players.map((player) => {
                return (
                    <td key={player}>
                        <InputComponent player={player}/>
                    </td>
                );
            })}
        </tr>
    );
}

export function PlayersComponents(props: PlayersProps): JSX.Element {
    return (
        <>
            {renderPlayerInput(props.players)}
        </>
    );
}
