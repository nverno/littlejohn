import React from 'react';
import { connect } from 'react-redux';

import { updateList, clearListErrors } from '../../../actions/list_actions';
import fonts from '../../../styles/font.module.scss';
import styles from './rename-form.module.scss';

const mapStateToProps = (state, _ownProps) => ({
  errors: state.errors.lists,
});

const mapDispatchToProps = dispatch => ({
  udpateList: (list) => dispatch(updateList(list)),
  clearListErrors: () => dispatch(clearListErrors()),
});


const RenameForm = ({ list, errors, updateList, clearListErrors }) => {
  const [name, setName] = React.useState(list.name);
  const [updated, setUpdated] = React.useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateList({ ...list, name, });
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false);
    }, 2000);
  };

  const renderErrors = () => {
    return (
      <ul className="list-errors">
        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`form-input ${fonts.type15}`}
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder='List Name'
          required
        />
      </form>
      {updated
       ? <div className={styles.updated}>Updated</div>
       : renderErrors()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RenameForm);
