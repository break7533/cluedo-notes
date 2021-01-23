import React from 'react';
import styled from 'styled-components';
import { useStateWithLocalStorage } from '../hooks/getlocalStorage.hook';

interface InputProps {
    player: string;
}

const InputStyles = styled.input`
    width: 30px;
    height: 30px;
    text-align: center;
    box-sizing: border-box;
    ::placeholder {
        opacity: 0.8;
    }
`;

export function InputComponent(props: InputProps): JSX.Element {
    const [playerName, setPlayerName] = useStateWithLocalStorage(props.player);

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
