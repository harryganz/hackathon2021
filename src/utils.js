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
    if (cr.indexOf('/') >= 0 && cr.length == 3) {
        let numerator = cr.substring(0,1);
        let denominator = cr.substring(2,3);
        numericCr = parseFloat(numerator)/parseFloat(denominator);
    } else {
        numericCr = parseFloat(cr)
    }
    return numericCr * 200;
}