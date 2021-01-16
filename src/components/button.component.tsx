import React, { useState } from 'react';
import { CellButtonStyles } from '../styles/CellButton';
import { ButtonStatus } from '../enums/button-status.enum';

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

export function ButtonComponent(): JSX.Element {
    const [status, setStatus] = useState(ButtonStatus.EMPTY);

    function handleClick(): void {
        const maxButtons = Object.values(ButtonStatus).length / 2;
        if (status === maxButtons - 1) {
            return setStatus(0);
        }

        return setStatus(status + 1);
    }

    const emoji = renderEmoji(status);

    return (
        <CellButtonStyles className={emoji}>
            <button type="button" onClick={handleClick}>
                {<span>{emoji}</span>}
            </button>
        </CellButtonStyles>
    );
}
