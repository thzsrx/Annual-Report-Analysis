import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ marginLeft: "350px", padding: "20px", width: "70%", }}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
