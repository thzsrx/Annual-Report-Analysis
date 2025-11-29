import React from "react";
import DataRoutes from "./Routes/DataRoutes.jsx";
import DataRoute from "./Routes/DataRoute.jsx";
import QuestionRoutes from "./Routes/QuestionRoutes.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";

export default function App() {
    return (
        <MainLayout>
            <DataRoute />
            <QuestionRoutes />
        </MainLayout>
    );
};
