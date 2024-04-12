import { RotatingLines } from "react-loader-spinner";

import style from "./TableCoin.module.css";

import TableRow from "./TableRow";

function TableCoin({ coins, isLoading, currency, setChart }) {
  return (
    <div className={style.container}>
      {isLoading ? (
        <RotatingLines strokeWidth="3" strokeColor="#3874ff" />
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                key={coin.id}
                coin={coin}
                currency={currency}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
