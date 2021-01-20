import React from 'react';
import { connect } from 'react-redux';

import ListIcon from '../icons/ListIcon';

import { createUserList, clearListErrors } from '../../../actions/list_actions';
// Note: when composing styles, must import ones that come first before others!!!!
// (must be a bug)
import buttons from '../../../styles/button.module.scss';
import fonts from '../../../styles/font.module.scss';
import styles from './list-form.module.scss';

const mapStateToProps = (state) => {
  const listErrors = state.errors.lists;
  return {
    formType: 'Create List',
    errors: listErrors,
    userId: state.session.currentUser.id,
    state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (userId, list) => dispatch(createUserList(userId, list)),
  clearListErrors: () => dispatch(clearListErrors()),
});

export const ListForm = ({
  formType,
  list,
  userId,
  errors,
  setOpen,
  processForm,
  clearListErrors,
}) => {
  const [name, setName] = React.useState((list && list.name) || '');
  const handleChange = (e) => setName(e.currentTarget.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    formType === 'Create List'
      ? processForm(userId, { name, public: false })
      : processForm(null, { ...list, name });
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.nameContainer}>
          <ListIcon />
          <div className={styles.nameOuter}>
            <div className={styles.nameInner}>
              <input
                type="text"
                className="form-input"
                value={name}
                onChange={handleChange}
                placeholder="List Name"
                required
              />
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          {setOpen && (
            <div style={{ marginRight: '8px' }}>
              <button
                type="button"
                /* className="list-form-cancel-button list-form-button" */
                className={`${buttons.cancel} ${styles.formButton}`}
                onClick={() => {
                  setOpen(false);
                  clearListErrors();
                }}
              >
                <span className={fonts.type4}>Cancel</span>
              </button>
            </div>
          )}
          <button className={`${buttons.submit} ${styles.formButton}`}>
            <span className={fonts.type4}>{formType}</span>
          </button>
        </footer>
      </form>

      {renderErrors()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
