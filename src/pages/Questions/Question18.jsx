import React, { useState } from "react";
import { questionData } from "../../Context/QuestionContext.jsx";

const Question18 = () => {

    const { setQuestion18Data } = questionData();
    const [value1, setvalue1] = useState();
    const [result, setresult] = useState();

    const handleSubmit = () => {
        setresult(value1);
        setQuestion18Data(value1);
    };

    return (
        <>
            <div>
                <label>Is the company manufacturing products that can be easily replicated in a country with cheap labour ?
                    <textarea rows="8" cols="100" value={value1} onChange={(e) => setvalue1(e.target.value)} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {result}
        </>
    );
};

export default Question18;
