import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [on, setOn] = useLocalStorage('darkMode')
    
    useEffect(() => {
        if(on) {
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }
    }, [on])
    return [on, setOn]
}

