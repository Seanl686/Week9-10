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
          className="appearance-none bg-cyan-500/10 text-3xl font-sans font-black px-3 py-1 outline-none border-2 border-transparent hover:border-purple-400/40 text-white rounded transition-all duration-150"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="text-[78px] font-mono font-black px-4 mt-0.5">{count}</span>
        <button
          className="appearance-none bg-cyan-500/10 text-3xl font-sans font-black px-3 py-1 outline-none border-2 border-transparent hover:border-purple-400/40 text-white rounded transition-all duration-150"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <input
          className="bg-white text-black text-3xl font-black p-0.5 w-20 text-center mr-1"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className="appearance-none bg-cyan-500/10 text-3xl font-sans font-black px-3 py-1 outline-none border-2 border-transparent hover:border-purple-400/40 text-white rounded transition-all duration-150"
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Add Amount
        </button>
        <button
          className="appearance-none bg-cyan-500/10 text-3xl font-sans font-black px-3 py-1 outline-none border-2 border-transparent hover:border-purple-400/40 text-white rounded transition-all duration-150 relative ml-1 overflow-hidden"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}