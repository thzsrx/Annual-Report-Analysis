import { React, useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Profile = () => {
    const { setPBTData } = useData();
    const [numberValue, setNumberValue] = useState("");
    const [numberValue1, setNumberValue1] = useState("");
    const [numberValue2, setNumberValue2] = useState("");
    const [result, setResult] = useState("");

    const handleSubtract = () => {
        const total = numberValue - numberValue1 - numberValue2;
        setResult(total);
        setPBTData(`${total}`);
    };

    return (
        <>
            <div>
                <h3>Profit Before Tax: {result}</h3>

                <label>
                    Total revenue:
                    <input
                        type="number"
                        value={numberValue}
                        onChange={(e) => setNumberValue(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    Total operating expenses:
                    <input
                        type="number"
                        value={numberValue1}
                        onChange={(e) => setNumberValue1(Number(e.target.value))}
                    />
                </label>
                <br />
                <label>
                    If extraordinary items:
                    <input
                        type="number"
                        value={numberValue2}
                        onChange={(e) => setNumberValue2(Number(e.target.value))}
                    />
                </label>
                <br />
                <button onClick={handleSubtract}>Result</button>
            </div>
            <br />
        </>
    );
};

export default Profile;
