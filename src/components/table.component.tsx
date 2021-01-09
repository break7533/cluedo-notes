import React from 'react';
import { ButtonComponent } from './button.component';

interface TableProps {
    className: string;
    title: string;
    players: string[];
    cards: string[];
}

function renderSuspectRow(suspect: string, players: string[]): JSX.Element {
    return (
        <tr>
            <thead>{suspect}</thead>
            {players.map(() => {
                return (
                    <td>
                        <ButtonComponent />
                    </td>
                );
            })}
        </tr>
    );
}

export function TableComponent(props: TableProps): JSX.Element {
    return (
        <>
            <thead>
                <td>{props.title}</td>
            </thead>

            {props.cards.map((s) => renderSuspectRow(s, props.players))}
        </>
    );
}
