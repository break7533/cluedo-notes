import React, { useState } from 'react';
import styled from 'styled-components';

interface InputProps {
    player: string;
}

const InputStyles = styled.input`
     width: 30px;
`;

export function InputComponent(props: InputProps): JSX.Element {
    const [playerName, setPlayerName] = useState('');

    function handleChange(evt: React.FormEvent, name: string) {
        evt.preventDefault();
        setPlayerName(name);
    }

    return (
        <InputStyles
            type="text"
            placeholder={props.player}
            value={playerName}
            maxLength={2}
            onChange={(e) => handleChange(e, e.target.value)}
        />
    );
}
