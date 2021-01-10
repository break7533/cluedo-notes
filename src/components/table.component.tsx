import React from 'react';
import styled from 'styled-components';
import { ButtonComponent } from './button.component';

interface TableProps {
    className: string;
    title: string;
    players: string[];
    cards: string[];
}

const Title = styled.thead`
    font-size: 2rem;
    font-weight: bold;
`;

const RowTitle = styled.thead`
    font-weight: bold;
`;

function renderSuspectRow(suspect: string, players: string[]): JSX.Element {
    return (
        <tr>
            <RowTitle>{suspect}</RowTitle>
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
            <Title>
                <td>{props.title}</td>
            </Title>

            {props.cards.map((s) => renderSuspectRow(s, props.players))}
        </>
    );
}
