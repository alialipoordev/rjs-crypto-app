import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import style from "./TableRow.module.css";

import { marketChart } from "../../services/cryptoApi";

function TableRow({ coin, currency, setChart }) {
  const {
    id,
    name,
    image,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  } = coin;

  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart({ ...json, coin });
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr>
      <td>
        <div className={style.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency === "usd" && "$"}
        {currency === "eur" && "€"}
        {currency === "jpy" && "¥"}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? style.success : style.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
}

export default TableRow;
