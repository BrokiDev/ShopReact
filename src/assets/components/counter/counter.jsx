
const Counter = ({ counter, onDecrementCounter, onIncrementCounter, isValidCounter}) => {
    return (
        <div className='counterContainer'>
        <h2>Counter</h2>
        <div className='buttonContainer'>
          <button type='button' className='counterButton' onClick={onDecrementCounter} disabled={!isValidCounter}>-</button>
          <h1 className='counterText'>{counter}</h1>
          <button type='button' className='counterButton' onClick={onIncrementCounter}>+</button>
        </div>
      </div>
    )
}

export default Counter;