import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div style={{
            width: "290px",
            height: "100vh",
            background: "#f5f5f5",
            padding: "20px",
            boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
            position: "fixed",
            left: 0,
            top: 0,
            overflowY: "auto",
            scrollBehavior: "smooth",
        }}>
            <h2>Menu</h2>

            <ul style={{ listStyle: "none", paddingTop: "10px" }}>
                <li><Link to="/">All Data</Link></li>
                <li><Link to="/ProfitAndLoss">ProfitAndLoss</Link></li>
                <li><Link to="/BalanceSheet">BalanceSheet</Link></li>
                <li><Link to="/CashFlow">CashFlow</Link></li>
                <li><Link to="/ProfitabilityRatio">ProfitabilityRatio</Link></li>
                <li><Link to="/LeverageRatio">LeverageRatio</Link></li>
                <li><Link to="/OperatingRatio">OperatingRatio</Link></li>
                <li><Link to="/valuationratio">valuationratio</Link></li>
                <li><Link to="/OtherFormula">Other Formula</Link></li>
                <li><Link to="/Question">Question</Link></li>
                <li><Link to="/Question/Question-List">Question List</Link></li>
                {/* 
                <li><Link to="/ProfitLoss/Total-operating-revenue">Total Operating Revenue</Link></li>
                <li><Link to="/ProfitLoss/Profit-Before-Tax">Profit Before Tax </Link></li>
                <li><Link to="/ProfitLoss/Profit-After-Tax">Profit After Tax </Link></li>
                <li><Link to="/ProfitLoss/Earning-Per-Share">Earning Per Share</Link></li>
                <li><Link to="/BalanceSheet/Shareholder-Equity">Shareholder Equity</Link></li>
                <li><Link to="/BalanceSheet/Share-Capital">Share Capital</Link></li>
                <li><Link to="/BalanceSheet/Number-Of-Shares">Numbers Of Shares</Link></li>
                <li><Link to="/BalanceSheet/Total-Liability">Total Liability</Link></li>
                <li><Link to="/BalanceSheet/Assets">Assets</Link></li>
                <li><Link to="/BalanceSheet/Total-Assets">Total Assets</Link></li>
                <li><Link to="/BalanceSheet/Shareholder-Equity2">Shareholder Equity</Link></li>
                <li><Link to="/BalanceSheet/Gross-Block">Gross Block</Link></li>
                <li><Link to="/BalanceSheet/Total-Depreciation">Total Depreciation</Link></li>
                <li><Link to="/BalanceSheet/Net-Block">Net Block</Link></li>
                <li><Link to="/CashFlow">CashFlow</Link></li>
                <li><Link to="/ProfitabilityRatio/Operating-Revenue">Operating Revenue</Link></li>
                <li><Link to="/ProfitabilityRatio/Operating-Expenses">Operating Expenses</Link></li>
                <li><Link to="/ProfitabilityRatio/Ebitda">Ebitda</Link></li>
                <li><Link to="/ProfitabilityRatio/Ebitda-Margin">Ebitda Margin</Link></li>
                <li><Link to="/ProfitabilityRatio/CAGR">CAGR</Link></li>
                <li><Link to="/ProfitabilityRatio/Pat-Margin">Pat Margin</Link></li>
                <li><Link to="/ProfitabilityRatio/Return-On-Equity">Return On Equity</Link></li>
                <li><Link to="/ProfitabilityRatio/Net-Profit-Margin">Net Profit Margin</Link></li>
                <li><Link to="/ProfitabilityRatio/Asset-Turnover">Asset Turnover</Link></li>
                <li><Link to="/ProfitabilityRatio/Finanical-Leverage">Finanical Leverage</Link></li>
                <li><Link to="/ProfitabilityRatio/Return-On-Equity2">Return On Equity2</Link></li>
                <li><Link to="/ProfitabilityRatio/Return-On-Asset">Return On Asset</Link></li>
                <li><Link to="/ProfitabilityRatio/Return-On-Capital-Employed">Return On Capital Employed</Link></li>
                <li><Link to="/ProfitabilityRatio/Overall-Capital-Employed">Overall Capital Employed</Link></li>
                <li><Link to="/ProfitabilityRatio/Ebit">Ebit</Link></li>
                <li><Link to="/LeverageRatio/Interest-Coverage-Ratio">Interest Coverage Ratio</Link></li>
                <li><Link to="/LeverageRatio/Earning-Before-Interest-And-Tax">Earning Before Interest And Tax</Link></li>
                <li><Link to="/LeverageRatio/Ebitda2">Ebitda2</Link></li>
                <li><Link to="/LeverageRatio/Debt-To-Equity-Ratio">Debt To Equity Ratio</Link></li>
                <li><Link to="/LeverageRatio/Total-Debt">Total Debt</Link></li>
                <li><Link to="/LeverageRatio/Debt-To-Assets-Ratio">Debt To Assets Ratio</Link></li>
                <li><Link to="/LeverageRatio/Financial-Leverage-Ratio">Financial Leverage Ratio</Link></li>
                <li><Link to="/OperatingRatio/Fixed-Assets-Turnover">Fixed Assets Turnover</Link></li>
                <li><Link to="/OperatingRatio/Working-Capital">Working Capital</Link></li>
                <li><Link to="/OperatingRatio/Working-Capital-Turnover">Working Capital Turnover</Link></li>
                <li><Link to="/OperatingRatio/Total-Assets-Turnover">Total Assets Turnover</Link></li>
                <li><Link to="/OperatingRatio/Inventory-Turnover-Ratio">Inventory Turnover Ratio</Link></li>
                <li><Link to="/OperatingRatio/Inventory-Number-Of-Days">Inventory Number Of Days</Link></li>
                <li><Link to="/OperatingRatio/Accounts-Receivale-Turnover-Ratio">Accounts Receivale Turnover Ratio</Link></li>
                <li><Link to="/OperatingRatio/Days-Sales-Outstanding">Days Sales Outstanding</Link></li>
                <li><Link to="/ValuationRatio/Price-To-Sales-Ratio">Price To Sales Ratio</Link></li>
                <li><Link to="/ValuationRatio/Sales-Per-Share">Sales Per Share</Link></li>
                <li><Link to="/ValuationRatio/Price-To-BookValue-Ratio">Price To BookValue Ratio</Link></li>
                <li><Link to="/ValuationRatio/BookValue">BookValue</Link></li>
                <li><Link to="/ValuationRatio/Price-To-Earning-Ratio">Price To Earning Ratio</Link></li>
                */}
            </ul>

        </div>
    );
};

export default Sidebar;
