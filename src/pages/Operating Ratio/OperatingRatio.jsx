import FixedAssetsTurnover from "./Fixed_assets_turnover.jsx";
import WorkingCapital from "./Working_capital.jsx";
import WorkingCapitalTurnover from "./Working_capital_turnover.jsx";
import TotalAssetsTurnover from "./Total_assets_turnover.jsx";
import CostOfGoodsSold from "./Cost_of_goods_sold.jsx";
import InventoryTuroverRatio from "./Inventory_turnover_ratio.jsx";
import AccountsReceivaleTurnoverRatio from "./Accounts_receivale_turnover_ratio.jsx";
import DaysSalesOutstanding from "./Days_sales_outstanding.jsx";

const OperatingRatio = () => {
    return (
        <>
            <FixedAssetsTurnover /><hr />
            <WorkingCapital /><hr />
            <WorkingCapitalTurnover /><hr />
            <TotalAssetsTurnover /><hr />
            <CostOfGoodsSold /><hr />
            <InventoryTuroverRatio /><hr />
            <AccountsReceivaleTurnoverRatio /><hr />
            <DaysSalesOutstanding /><hr />
        </>
    );
};

export default OperatingRatio;
