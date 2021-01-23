import React, { useEffect, useState } from 'react';

export function useStateWithLocalStorage(
    localStorageKey: string,
    initVal = ''
): [string, React.Dispatch<React.SetStateAction<string>>] {
    const [value, setValue] = useState(
        localStorage.getItem(localStorageKey) || initVal
    );

    useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
}
