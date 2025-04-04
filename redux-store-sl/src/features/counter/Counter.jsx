import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="appearance-none bg-transparent text-3xl font-bold px-3 py-1 outline-none border-2 border-transparent hover:border-primary text-white bg-primary-dark/10 rounded transition-all"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="text-6xl font-mono font-bold px-4 py-2">{count}</span>
        <button
          className="appearance-none bg-transparent text-3xl font-bold px-3 py-1 outline-none border-2 border-transparent hover:border-primary text-white bg-primary-dark/10 rounded transition-all"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <input
          className="bg-white/10 text-lg font-mono px-2 py-1 outline-none border-2 border-primary-light/50 rounded text-white w-20 text-center"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className="appearance-none bg-transparent text-lg font-bold px-3 py-1 outline-none border-2 border-transparent hover:border-primary-light text-white bg-primary-dark/10 rounded transition-all ml-2"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className="appearance-none relative bg-transparent text-lg font-bold px-3 py-1 outline-none border-2 border-transparent hover:border-primary-light text-white bg-primary-dark/10 rounded transition-all ml-2 overflow-hidden"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}