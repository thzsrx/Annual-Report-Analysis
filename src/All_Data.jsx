import { useData } from "./Context/DataContext.jsx";
import YearSelect from "./Layouts/YearSelect.jsx";

const Home = () => {
    const { divData } = useData();
    const { PBTData } = useData();
    const { PATData } = useData();
    const { EPSData } = useData();
    const { SEData } = useData();
    const { SCData } = useData();
    const { NOSData } = useData();
    const { TLData } = useData();
    const { AData } = useData();
    const { TAData } = useData();
    const { SEEData } = useData();
    const { GBData } = useData();
    const { TDData } = useData();
    const { NBData } = useData();
    const { CFData } = useData();
    const { ORData } = useData();
    const { OEData } = useData();
    const { EbitdaData } = useData();
    const { EbitdaMarginData } = useData();
    const { CAGRData } = useData();
    const { PatMarginData } = useData();
    const { ReturnOnEquityData } = useData();
    const { NetProfitMarginData } = useData();
    const { AssetTurnoverData } = useData();
    const { FinanicalLeverageData } = useData();
    const { ReturnOnEquity2Data } = useData();
    const { ReturnOnAssetData } = useData();
    const { ReturnOnCapitalEmployedData } = useData();
    const { OverallCapitalEmployedData } = useData();
    const { EbitData } = useData();
    const { InterestCoverageRatioData } = useData();
    const { EarningBeforeInterestAndTaxData } = useData();
    const { Ebitda2Data } = useData();
    const { DebtToEquityRatioData } = useData();
    const { TotalDebtData } = useData();
    const { DebtToAssetsRatioData } = useData();
    const { FinancialLeverageRatioData } = useData();
    const { FixedAssetsTurnoverData } = useData();
    const { WorkingCapitalData } = useData();
    const { WorkingCapitalTurnoverData } = useData();
    const { TotalAssetsTurnoverData } = useData();
    const { InventoryTurnoverRatioData } = useData();
    const { InventoryNumberOfDaysData } = useData();
    const { AccountsReceivaleTurnoverRatioData } = useData();
    const { DaysSalesOutstandingData } = useData();
    const { PriceToSalesRatioData } = useData();
    const { SalesPerShareData } = useData();
    const { PriceToBookValueRatioData } = useData();
    const { BookValueData } = useData();
    const { PriceToEarningRatioData } = useData();
    const { GrossProfitMarginData } = useData();
    const { GrossProfitData } = useData();
    const { FutureValueData } = useData();
    const { PresentValueData } = useData();
    const { FutureCashFlowData } = useData();
    const { TerminalValueData } = useData();
    const { PresentValueOfCashFlowData } = useData();
    const { NetPresentValueData } = useData();
    const { NetDebtData } = useData();
    const { TotalPresentValueOfFutureCashFlowData } = useData();
    const { SharePriceData } = useData();
    const { LowerIntrinsicValueData } = useData();
    const { UpperIntrinsicValueData } = useData();

    const handleYearChange = (year) => {
        console.log("Received year:", year);
    };
    return (
        <div>
            <h1>🏠 Home Component</h1>
            <div>
                <div>
                    <h2>Year Selector</h2>
                    <YearSelect onYearChange={handleYearChange} />
                </div>
                <strong>Total operating revenue:</strong> {divData || "No data yet"}
                <br /> <strong>Profit before tax:</strong> {PBTData || "No data yet"}
                <br /> <strong>Profit after tax:</strong> {PATData || "No data yet"}
                <br /> <strong>Earning per shares:</strong> {EPSData || "No data yet"}

                {/* Balance Sheet */}
                <br /> <strong>Shareholder Equity:</strong> {SEData || "No data yet"}
                <br /> <strong>Shareholder Capital:</strong> {SCData || "No data yet"}
                <br /> <strong>Numbers of Shares:</strong> {NOSData || "No data yet"}
                <br /> <strong>Total Liability:</strong> {TLData || "No data yet"}
                <br /> <strong>Assets:</strong> {AData || "No data yet"}
                <br /> <strong>Total Assets:</strong> {TAData || "No data yet"}
                <br /> <strong>Shareholder Equity:</strong> {SEEData || "No data yet"}
                <br /> <strong>Shareholder Equity:</strong> {SEEData || "No data yet"}
                <br /> <strong>Gross Block:</strong> {GBData || "No data yet"}
                <br /> <strong>Total Depreciation:</strong> {TDData || "No data yet"}
                <br /> <strong>Net Block:</strong> {NBData || "No data yet"}

                {/* Cash Flow */}
                <br /> <strong>Cash Flow:</strong> {CFData || "No data yet"}

                {/* Profitability Ratio */}
                <br /> <strong>Operating Revenue:</strong> {ORData || "No data yet"}
                <br /> <strong>Operating Expenses:</strong> {OEData || "No data yet"}
                <br /> <strong>Ebitda:</strong> {EbitdaData || "No data yet"}
                <br /> <strong>Ebitda Margin:</strong> {EbitdaMarginData || "No data yet"}
                <br /> <strong>CAGR:</strong> {CAGRData || "No data yet"}
                <br /> <strong>Pat Margin:</strong> {PatMarginData || "No data yet"}
                <br /> <strong>Return On Equity:</strong> {ReturnOnEquityData || "No data yet"}
                <br /> <strong>Net Profit Margin:</strong> {NetProfitMarginData || "No data yet"}
                <br /> <strong>Asset Turnover:</strong> {AssetTurnoverData || "No data yet"}
                <br /> <strong>Finanical Leverage:</strong> {FinanicalLeverageData || "No data yet"}
                <br /> <strong>Return On Equity:</strong> {ReturnOnEquity2Data || "No data yet"}
                <br /> <strong>Return On Asset:</strong> {ReturnOnAssetData || "No data yet"}
                <br /> <strong>Return On Capital Employed:</strong> {ReturnOnCapitalEmployedData || "No data yet"}
                <br /> <strong>Overall Capital Employed:</strong> {OverallCapitalEmployedData || "No data yet"}
                <br /> <strong>Ebit:</strong> {EbitData || "No data yet"}

                {/* Leverage Ratio */}
                <br /> <strong>Interest Coverage Ratio:</strong> {InterestCoverageRatioData || "No data yet"}
                <br /> <strong>Earning Before Interest And Tax:</strong> {EarningBeforeInterestAndTaxData || "No data yet"}
                <br /> <strong>Ebitda2:</strong> {Ebitda2Data || "No data yet"}
                <br /> <strong>Debt To Equity Ratio:</strong> {DebtToEquityRatioData || "No data yet"}
                <br /> <strong>Total Debt:</strong> {TotalDebtData || "No data yet"}
                <br /> <strong>Debt To Assets Ratio:</strong> {DebtToAssetsRatioData || "No data yet"}
                <br /> <strong>Finanical Leverage Ratio:</strong> {FinancialLeverageRatioData || "No data yet"}

                {/* Operating Ratio */}
                <br /> <strong>Fixed Assets Turnover:</strong> {FixedAssetsTurnoverData || "No data yet"}
                <br /> <strong>Working Capital:</strong> {WorkingCapitalData || "No data yet"}
                <br /> <strong>Working Capital Turnover:</strong> {WorkingCapitalTurnoverData || "No data yet"}
                <br /> <strong>Total Assets Turnover:</strong> {TotalAssetsTurnoverData || "No data yet"}
                <br /> <strong>Inventory Turnover Ratio:</strong> {InventoryTurnoverRatioData || "No data yet"}
                <br /> <strong>Inventory Number of Days:</strong> {InventoryNumberOfDaysData || "No data yet"}
                <br /> <strong>Accounts Receivale Turnover Ratio:</strong> {AccountsReceivaleTurnoverRatioData || "No data yet"}
                <br /> <strong>Days Sales Outstanding:</strong> {DaysSalesOutstandingData || "No data yet"}

                {/* Valuation Ratio */}
                <br /> <strong>Price To Sales Ratio:</strong> {PriceToSalesRatioData || "No data yet"}
                <br /> <strong>Sales Per Share:</strong> {SalesPerShareData || "No data yet"}
                <br /> <strong>Price To BookValue Ratio:</strong> {PriceToBookValueRatioData || "No data yet"}
                <br /> <strong>BookValue:</strong> {BookValueData || "No data yet"}
                <br /> <strong>Price To Earning Ratio:</strong> {PriceToEarningRatioData || "No data yet"}

                {/* Other Formula */}
                <br /> <strong>Gross Profit Margin:</strong> {GrossProfitMarginData || "No data yet"}
                <br /> <strong>Gross Profit:</strong> {GrossProfitData || "No data yet"}
                <br /> <strong>Future Value:</strong> {FutureValueData || "No data yet"}
                <br /> <strong>Present Value:</strong> {PresentValueData || "No data yet"}
                <br /> <strong>Future Cash Flow:</strong> {FutureCashFlowData || "No data yet"}
                <br /> <strong>Terminal Value:</strong> {TerminalValueData || "No data yet"}
                <br /> <strong>Present Value Of Cash Flow:</strong> {PresentValueOfCashFlowData || "No data yet"}
                <br /> <strong>Net Present Value:</strong> {NetPresentValueData || "No data yet"}
                <br /> <strong>Net Debt:</strong> {NetDebtData || "No data yet"}
                <br /> <strong>Total Present Value Of Future Cash Flow:</strong> {TotalPresentValueOfFutureCashFlowData || "No data yet"}
                <br /> <strong>Share Price:</strong> {SharePriceData || "No data yet"}
                <br /> <strong>Lower Intrinsic Value:</strong> {LowerIntrinsicValueData || "No data yet"}
                <br /> <strong>Upper Intrinsic Value:</strong> {UpperIntrinsicValueData || "No data yet"}
            </div>
            <hr />
        </div>
    );
};

export default Home;
