import { useEffect, useRef } from "react";

function useCloseModal(handler) {
    const ref = useRef();

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                handler();
            }
        };

        document.addEventListener("click", handleClick, true);
        return () => document.removeEventListener("click", handleClick, true);
    }, [ref, handler]);
    return ref;
}

export default useCloseModal;
