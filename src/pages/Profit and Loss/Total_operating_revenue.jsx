import { React, useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Profile = () => {
    const { setDivData } = useData();
    const [numberValue, setNumberValue] = useState("");
    const [numberValue1, setNumberValue1] = useState("");
    const [numberValue2, setNumberValue2] = useState("");
    const [result, setResult] = useState("");

    const handleAddition = () => {
        const total = numberValue + numberValue1 + numberValue2;
        setResult(total);
        setDivData(`${total}`);
    };

    return (
        <>
            <div>
                <h3>Total Operating Revenue: {result}</h3>

                <label>
                    Sale of services:
                    <input
                        type="number"
                        value={numberValue}
                        onChange={(e) => setNumberValue(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Sale of product:
                    <input
                        type="number"
                        value={numberValue1}
                        onChange={(e) => setNumberValue1(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Other Operating Revenue:
                    <input
                        type="number"
                        value={numberValue2}
                        onChange={(e) => setNumberValue2(Number(e.target.value))}
                    />
                </label>
                <br />
                <button onClick={handleAddition}>Result</button>
            </div>
            <br />
        </>
    );
};

export default Profile;
