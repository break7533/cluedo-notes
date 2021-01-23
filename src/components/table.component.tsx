import React from 'react';
import styled from 'styled-components';
import { ButtonComponent } from './button.component';

interface TableProps {
    className: string;
    title: string;
    players: string[];
    cards: string[];
}

const TitleStyles = styled.tr`
    font-size: 2em;
    font-weight: bold;

    td {
        color: white;
    }
`;

const RowTitleStyles = styled.td`
    font-weight: bold;
`;

function renderSuspectRow(suspect: string, players: string[]): JSX.Element {
    return (
        <tr key={suspect}>
            <RowTitleStyles>{suspect}</RowTitleStyles>
            {players.map((player, i) => {
                return (
                    <td key={player + i}>
                        <ButtonComponent
                            name={suspect}
                            row={player}
                            column={`${i}`}
                        />
                    </td>
                );
            })}
        </tr>
    );
}

export function TableComponent(props: TableProps): JSX.Element {
    return (
        <>
            <TitleStyles>
                <td>{props.title}</td>
            </TitleStyles>
            {props.cards.map((s) => renderSuspectRow(s, props.players))}
        </>
    );
}
