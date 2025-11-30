import { Routes, Route } from "react-router-dom";
import { DataProvider } from "../Context/QuestionContext.jsx";

import Question from "../Layouts/Question.jsx";
import Questions from "../pages/Questions/Questions.jsx";

const QuestionRoutes = () => {
    return (
        <DataProvider>
            <Routes>
                <Route path="/Question" element={<Question />} />
                <Route path="/Question/Question-List" element={<Questions />} />
            </Routes>
        </DataProvider>
    );
};

export default QuestionRoutes;
