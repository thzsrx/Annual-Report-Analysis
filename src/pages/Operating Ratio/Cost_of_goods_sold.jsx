import { React, useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const cost_of_goods_sold = () => {

    const { setGBData } = useData();
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [value3, setvalue3] = useState("");
    const [value4, setvalue4] = useState("");
    const [result, setResult] = useState("");

    const handleAddition = () => {
        const total = value1 + value2 + value3 + value4;
        setResult(total);
        setGBData(`${total}`);
    };

    return (
        <>
            <div>
                <h3>Total Liability: {result}</h3>

                <label>
                    Share capital:
                    <input
                        type="number"
                        value={value1}
                        onChange={(e) => setvalue1(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Reserve:
                    <input
                        type="number"
                        value={value2}
                        onChange={(e) => setvalue2(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Surplus:
                    <input
                        type="number"
                        value={value3}
                        onChange={(e) => setvalue3(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Surplus:
                    <input
                        type="number"
                        value={value4}
                        onChange={(e) => setvalue4(Number(e.target.value))}
                    />
                </label>
                <button onClick={handleAddition}>Result</button>
            </div>
            <br />
        </>
    );
}

export default cost_of_goods_sold;
