import React from 'react';
import { connect } from 'react-redux';

import ListIcon from '../ListIcon';

import { createUserList, clearListErrors } from '../../../actions/list_actions';

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
    <div className="list-form-container">
      <form className="list-form" onSubmit={handleSubmit}>
        <div className="list-form-name-container">
          <ListIcon />
          <div className="list-form-name-outer">
            <div className="list-form-name-inner">
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

        <footer className="list-form-footer">
          {setOpen && (
            <div style={{ marginRight: '8px' }}>
              <button
                type="button"
                className="list-form-cancel-button list-form-button"
                onClick={() => {
                  setOpen(false);
                  clearListErrors();
                }}
              >
                <span className="lj-type4">Cancel</span>
              </button>
            </div>
          )}
          <button className="list-form-submit-button list-form-button">
            <span className="lj-type4">{formType}</span>
          </button>
        </footer>
      </form>

      {renderErrors()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
