import React from 'react';
import Cell from '../styles/Cell';

interface HeaderProps {
  players: string[];
}

function renderPlayer(player: string): JSX.Element {
  return <Cell>{player}</Cell>;
}

export function HeaderComponent(props: HeaderProps): JSX.Element {
  return (
    <table>
      <thead>
        <td>Cluedo</td>
        {props.players.map((p) => renderPlayer(p))}
      </thead>
    </table>
  );
}
