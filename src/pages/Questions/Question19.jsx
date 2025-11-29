import React, { useState } from "react";
import { questionData } from "../../Context/QuestionContext.jsx";

const Question19 = () => {

    const { setQuestion19Data } = questionData();
    const [value1, setvalue1] = useState();
    const [result, setresult] = useState();

    const handleSubmit = () => {
        setresult(value1);
        setQuestion19Data(value1);
    };

    return (
        <>
            <div>
                <label>Does the company have too many subsidiaries ?
                    <textarea rows="8" cols="100" value={value1} onChange={(e) => setvalue1(e.target.value)} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {result}
        </>
    );
};

export default Question19;
