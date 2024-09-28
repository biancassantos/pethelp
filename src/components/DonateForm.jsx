import { useState, useRef, useEffect } from "react";

const DonateForm = () => {
  const [amount, setAmount] = useState(5);
  const [isCustom, setIsCustom] = useState(false);
  
  const inputRef = useRef();

  function changeAmount(value) {
    if (value === 'custom') {
      setIsCustom(true);
      setAmount('');
    } else {
      setIsCustom(false);
      setAmount(value);
    }
  }

  function handleChange(e) {
    setAmount(Number(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(amount);
  }

  useEffect(() => {
    if (isCustom) {
      inputRef.current.focus();
    }
  }, [isCustom])

  return (
    <div className="donate-container">
      <div className="donate-btns">
        <button className="donate-btn" onClick={() => changeAmount(5)}>$5</button>
        <button className="donate-btn" onClick={() => changeAmount(10)}>$10</button>
        <button className="donate-btn" onClick={() => changeAmount(20)}>$20</button>
        <button className="donate-btn" onClick={() => changeAmount(50)}>$50</button>
        <button className="donate-btn" onClick={() => changeAmount('custom')}>custom amount</button>
      </div>
      <form className="donate-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">$</label>
          <input 
          type="text" 
          name="amount" 
          id="amount" 
          value={amount}
          ref={inputRef}
          onChange={handleChange}
          disabled={isCustom ? false : true} />
        </div>
        <input type="submit" value="donate" />
      </form>
    </div>
  )
}

export default DonateForm;