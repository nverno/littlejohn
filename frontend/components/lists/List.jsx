import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';

import styles from './lists.module.scss';
import fonts from '../../styles/font.module.scss';
import ListIcon from './icons/ListIcon';
import {
  closeList,
  openList,
} from '../../actions/list_actions';
import ListDropdown from './dropdown/ListDropdown';

const mapStateToProps = (state, { list: { id } }) => {
  return {
    open: state.ui.lists[id],
  };
};

const mapDispatchToProps = (dispatch, { list: { id } }) => ({
  closeList: () => dispatch(closeList(id)),
  openList: () => dispatch(openList(id)),
});

const List = ({
  list,
  open,
  closeList,
  openList,
  ...props
}) => {
  if (!list) return null;

  const caret = (
    <span className={styles.caret}>
      {!open ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
    </span>
  );

  const toggleList = () => {
    if (open) closeList();
    else openList();
  };

  const { name, id: listId } = list;
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.button}>
          <div className={styles.inner}>
            <div className={styles.label}>
              <Link to={`/lists/${listId}`} className={styles.link}>
                <ListIcon />
                <div className={styles.name}>
                  <span className={fonts.type1}>{name}</span>
                </div>
              </Link>
            </div>

            <div className={styles.controls}>
              <ListDropdown list={list} />

              <div className={styles.toggle} onClick={toggleList}>
                <div className={styles.caretContainer}>{caret}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
