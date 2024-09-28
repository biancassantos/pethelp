import { useState } from "react";

const RequestRescueForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    address: '',
    species: 'dog',
    situation: 'stray',
    situationText: ''
  });

  function handleChange(e) {
    setInputs(({...inputs, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Your name</label>
        <input 
        type="text" 
        name="name" 
        id="name" 
        required 
        onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input 
        type="email" 
        name="email" 
        id="email" 
        required 
        onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="address">Address of the rescue</label>
        <input 
        type="text" 
        name="address" 
        id="address" 
        required 
        onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="species">Species</label>
        <select name="species" id="species" onChange={handleChange}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="situation">Situation of the pet</label>
        <div className="radio-input">
          <input 
          type="radio" 
          name="situation" 
          id="stray" 
          value="stray" 
          onChange={handleChange} />
          <label htmlFor="stray">Stray</label>
          <input 
          type="radio" 
          name="situation" 
          id="hasOwners" 
          value="hasOwners" 
          onChange={handleChange} />
          <label htmlFor="hasOwners">Has owners</label>
        </div>
      </div>
      <div>
        <label htmlFor="situationText">Tell us more about the situation</label>
        <textarea 
        name="situationText" 
        id="situationText" 
        cols="30" rows="10" min="100" 
        required 
        placeholder="Describe the situation of the pet" 
        onChange={handleChange}>
        </textarea>
      </div>
      <input type="submit" value="send request" />
    </form>
  )
}

export default RequestRescueForm;