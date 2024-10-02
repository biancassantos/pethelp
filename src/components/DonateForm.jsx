import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const DonateForm = () => {
  const [amount, setAmount] = useState(5);
  const [isCustom, setIsCustom] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const inputRef = useRef();
  const navigate = useNavigate();

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

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    navigate('/pethelp/donate/confirmed');
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
        <input 
        type="submit" 
        value={isSubmitting ? "donating..." : "donate"} 
        disabled={isSubmitting} />
      </form>
    </div>
  )
}

export default DonateForm;