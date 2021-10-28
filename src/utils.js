import { useEffect } from "react";

export function debounce(fn, timeout) {
    if (typeof timeout === 'undefined') {
        timeout = 200;
    }

    let id;
    return (...args) => {
        clearTimeout(id);
        id = setTimeout(() => {fn.apply(this, args);}, timeout);
    };
}

export function ClickOutsideEffect(ref, onEffect) {
    useEffect(() => {
        let onOutsideClickHandler = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onEffect()
            }
        };

        document.addEventListener("mousedown", onOutsideClickHandler);
        return () => {
            document.removeEventListener("mousedown", onOutsideClickHandler);
        }
    });
}

export function calculateXp(cr) {
    let numericCr = 0.0;
    if (cr.indexOf('/') >= 0 && cr.length === 3) {
        let numerator = cr.substring(0,1);
        let denominator = cr.substring(2,3);
        numericCr = parseFloat(numerator)/parseFloat(denominator);
    } else {
        numericCr = parseFloat(cr)
    }
    return numericCr * 200;
}

export function calculateXpBudget(numPlayers, avgPlayerLevel) {
    const lookupTable = [25, 50, 75, 125, 250, 300, 350, 450, 550, 600, 800, 1000, 1100, 1250, 1400, 1600, 2000, 2100, 2400, 2800];
    return numPlayers*lookupTable[avgPlayerLevel-1];
}

export function calculateTotalXp(monsters) {
    return Object.values(monsters).reduce((acc, el) => acc + el.count * calculateXp(el.monster.challenge_rating), 0);
}

export function calculateMultiplier(monsters) {
    let totalMonsters = Object.values(monsters).reduce((acc, el) => acc + el.count, 0);
        if (totalMonsters < 2) {
            return 1;
        }
        if (totalMonsters < 3) {
            return 1.5;
        }
        if (totalMonsters < 7) {
            return 2;
        }
        if (totalMonsters < 11) {
            return 2.5;
        }
        if (totalMonsters < 15) {
            return 3;
        }
        
        return 4;
}