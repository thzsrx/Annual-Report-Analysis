// App.jsx
import DataRoute from "./Routes/DataRoute.jsx";
import QuestionRoutes from "./Routes/QuestionRoutes.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import { YearProvider } from "./Context/YearContext.jsx";
import { DataProvider } from "./Context/DataContext.jsx";

export default function App() {
    return (
        <YearProvider>
            <DataProvider>
                <MainLayout>
                    <DataRoute />
                    <QuestionRoutes />
                </MainLayout>
            </DataProvider>
        </YearProvider>
    );
}
