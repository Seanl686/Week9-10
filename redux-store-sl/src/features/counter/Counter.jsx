import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

return (
    <div>
        <div className={styles.buttonContainer}>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                className={styles.incrementButton}
            >
                Increment
            </button>
            <span className={styles.countDisplay}>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                className={styles.decrementButton}
            >
                Decrement
            </button>
        </div>
    </div>
)
}