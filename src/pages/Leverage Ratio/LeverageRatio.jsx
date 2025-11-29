import InterestCoverageRatio from "./Interest_Coverage_Ratio";
import EarningBeforeInterestAndTax from "./Earning_before_Interest_and_tax";
import Ebitda2 from "./Ebitda2";
import DebtToEquityRatio from "./Debt_to_equity_ratio";
import TotalDebt from "./Total_debt";
import DebtToAssetsRatio from "./Debt_to_assets_ratio";
import FinancialLeverageRatio from "./Financial_leverage_ratio";

const LeverageRatio = () => {
    return (
        <>
            <InterestCoverageRatio /><hr />
            <EarningBeforeInterestAndTax /><hr />
            <Ebitda2 /><hr />
            <DebtToEquityRatio /><hr />
            <TotalDebt /><hr />
            <DebtToAssetsRatio /><hr />
            <FinancialLeverageRatio /><hr />
        </>
    );
};

export default LeverageRatio;
