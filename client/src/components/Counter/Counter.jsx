import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h3 data-testid="header">Counter</h3>
        </>
    );
}
