import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr className={css['transaction-history-tr-head']}>
          <th className={css['transaction-history-th0']}>Type</th>
          <th className={css['transaction-history-th']}>Amount</th>
          <th className={css['transaction-history-th']}>Currency</th>
        </tr>
      </thead>
      {items.map((item, index) => (
        <tbody key={item.id}>
          <tr className={css['transaction-history-tr' + (index % 2)]}>
            <td className={css['transaction-history-td0']}>{item.type}</td>
            <td className={css['transaction-history-td']}>{item.amount}</td>
            <td className={css['transaction-history-td']}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
