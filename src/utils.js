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