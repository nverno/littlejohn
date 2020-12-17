import React from 'react';
import { connect } from 'react-redux';

import ListIcon from './list_icon';

import {
  createUserList,
  updateList,
  deleteList,
  clearListErrors,
  // followList,
  // unfollowList,
} from '../../actions/list_actions';

const mapStateToProps = (state, _ownProps) => {
  const listErrors = state.errors.lists;
  return ({
    errors: listErrors,
    userId: state.session.currentUser.id,
    state
  });
};

const mapDispatchToProps = (dispatch) => ({
  createUserList: (userId, list) => dispatch(createUserList(userId, list)),
  updateList: (list) => dispatch(updateList(list)),
  deleteList: (listId) => dispatch(deleteList(listId)),
  clearListErrors: () => dispatch(clearListErrors()),
});

const ListForm = ({
  userId, errors, setOpen, createUserList, updateList, deleteList,
  clearListErrors }) => {
  const [name, setName] = React.useState('');
  const handleChange = (e) => setName(e.currentTarget.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    createUserList(userId, { name, public: false });
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
                placeholder='List Name'
                required
              />
            </div>
          </div>
        </div>

        <footer className="list-form-footer">
          <div style={{ marginRight: '8px' }}>
            <button type='button'
              className="list-form-cancel-button list-form-button"
              onClick={() => {
                setOpen(false);
                clearListErrors();
              }}>
              <span className="lj-type4">Cancel</span>
            </button>
          </div>
          <button className="list-form-submit-button list-form-button">
            <span className="lj-type4">Create List</span>
          </button>
        </footer>

      </form>

      {renderErrors()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
