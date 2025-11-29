import TotalOperatingRevenue from "./Total_operating_revenue.jsx";
import ProfitBeforeTax from "./Profit_before_tax.jsx";
import ProfitAfterTax from "./Profit_after_tax";
import EarningPerShare from "./Earning_per_share";

const ProfitAndLoss = () => {
    return (
        <>
            <TotalOperatingRevenue /><hr />
            <ProfitBeforeTax /><hr />
            <ProfitAfterTax /><hr />
            <EarningPerShare />
        </>
    );
};

export default ProfitAndLoss;
