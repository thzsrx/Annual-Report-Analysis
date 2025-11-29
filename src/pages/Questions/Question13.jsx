import React, { useState } from "react";
import { questionData } from "../../Context/QuestionContext.jsx";

const Question13 = () => {

    const { setQuestion13Data } = questionData();
    const [value1, setvalue1] = useState();
    const [result, setresult] = useState();

    const handleSubmit = () => {
        setresult(value1);
        setQuestion13Data(value1);
    };

    return (
        <>
            <div>
                <label>What is the revenue mix ? Which product sells the most ?
                    <textarea rows="8" cols="100" value={value1} onChange={(e) => setvalue1(e.target.value)} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {result}
        </>
    );
};

export default Question13;
