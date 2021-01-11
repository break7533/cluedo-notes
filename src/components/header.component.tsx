import React from 'react';
import styled from 'styled-components';
import { CellStyles } from '../styles/Cell';

interface HeaderProps {
    players: string[];
}

const TableHeadStyles = styled.thead`
    display: table;
`;

function renderPlayer(player: string): JSX.Element {
    return <CellStyles key={player}>{player}</CellStyles>;
}

export function HeaderComponent(props: HeaderProps): JSX.Element {
    return (
        <TableHeadStyles>
            <tr>
                <th></th>
                {props.players.map((p) => renderPlayer(p))}
            </tr>
        </TableHeadStyles>
    );
}
