import { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Share_capital = () => {

    const { setSCData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handleResult = () => {
        const total = value1 * value2;
        setresult(total);
        setSCData(total);
    };

    return (
        <>
            <div>
                <h1>Share Capital: {result}</h1>
                <div>
                    <label> Face value:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label> Numbers of Shares:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handleResult}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Share_capital;
