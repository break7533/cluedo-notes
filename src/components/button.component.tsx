import React from 'react';
import { CellButtonStyles } from '../styles/CellButton';
import { ButtonStatus } from '../enums/button-status.enum';
import { useStateWithLocalStorage } from '../hooks/getlocalStorage.hook';

interface ButtonProps {
    name: string,
    row: string,
    column: string,
}

function renderEmoji(status: ButtonStatus): string {
    let emoji = '';
    switch (status) {
        case ButtonStatus.EMPTY:
            break;
        case ButtonStatus.RED_X:
            emoji = '🛑';
            break;
        case ButtonStatus.GREEN_TICK:
            emoji = '✅';
            break;
        case ButtonStatus.QUESTION_MARK:
            emoji = '❓';
            break;
        default:
            break;
    }
    return emoji;
}

export function ButtonComponent(props: ButtonProps): JSX.Element {
    const [status, setStatus] = useStateWithLocalStorage(props.name + props.row + props.column, '0');

    function handleClick(): void {
        const maxButtons = Object.values(ButtonStatus).length / 2;
        if (status === `${maxButtons - 1}`) {
            return setStatus('0');
        }

        return setStatus(`${parseInt(status) + 1}`);
    }

    const emoji = renderEmoji(parseInt(status));

    return (
        <CellButtonStyles className={emoji}>
            <button type="button" onClick={handleClick}>
                {<span>{emoji}</span>}
            </button>
        </CellButtonStyles>
    );
}
