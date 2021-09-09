import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    const [val, setVal] = useState(1);

    return (
        <>
            <h3 data-testid="header">
                Counter <span data-testid="counter">{count}</span>
            </h3>
            <div style={{ display: "flex" }}>
                <button
                    data-testid="subtract-btn"
                    onClick={() => {
                        setCount((prev) => prev - val);
                    }}
                >
                    -
                </button>
                <input
                    type="number"
                    data-testid="input"
                    value={val}
                    onChange={(e) => {
                        setVal(parseInt(e.target.value));
                    }}
                />
                <button
                    data-testid="add-btn"
                    onClick={() => {
                        setCount((prev) => prev + val);
                    }}
                >
                    +
                </button>
            </div>
        </>
    );
}
