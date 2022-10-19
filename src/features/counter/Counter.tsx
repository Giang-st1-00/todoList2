import React, { useState } from 'react';
import styles from './Counter.module.css'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';

export function Counter() {

    const count = useAppSelector(selectCount);
    const dispatchCount = useAppDispatch();

    return (
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            onClick={() => dispatchCount(decrement())}
          >
          -
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            onClick={() => dispatchCount(increment())}
          >
          +
          </button>
        </div>
      </div>
    );
  }