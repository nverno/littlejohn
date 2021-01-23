import React from 'react';
import { connect } from 'react-redux';
import DepositForm from '../../account/deposit/DepositForm';
import { getBuyingPower } from '../../../selectors/user';
import styles from './buying-power.module.scss';

const mapStateToProps = (state) => ({
  buyingPower: getBuyingPower(state),
});

const DepositFunds = () => {
  return (
    <div className={styles.deposit}>
      <DepositForm />
    </div>
  );
};

const BuyingPower = ({ buyingPower, ...props }) => {
  const [expanded, setExpanded] = React.useState(false);
  const cname = expanded ? 'expanded-item' : 'expandable-item';

  return (
    <section>
      <div className={styles.container}>
        <div className={cname}>
          <button
            type="button"
            className={expanded ? styles.expanded : styles.button}
            onClick={() => setExpanded((expandable) => !expandable)}
          >
            <header className={styles.header}>
              <div>
                <span>Buying Power</span>
                <span className={styles.power}>
                  <span>${buyingPower}</span>
                </span>
              </div>
            </header>
          </button>
          {expanded && <DepositFunds {...props} />}
        </div>
      </div>
    </section>    
  );
};

export default connect(mapStateToProps)(BuyingPower);
