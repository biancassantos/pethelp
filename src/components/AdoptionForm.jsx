/* eslint-disable react/prop-types */
import { useState } from "react";
import pets from "../pets";

const AdoptionForm = ({ id }) => {
  const [inputs, setInputs] = useState({
    pet: `${id} - ${pets[id].name}`,
    name: '',
    email: '',
    address: '',
    dob: '',
    aboutApplicant: ''
  })

  function handleChange(e) {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="pet">Application for</label>
        <input 
        type="text" 
        name="pet" 
        id="pet" 
        value={`${id} - ${pets[id].name}`} 
        disabled/>
      </div>
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
        <label htmlFor="address">Address</label>
        <input 
        type="text" 
        name="address" 
        id="address" 
        onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="dob">Date of birth</label>
        <input 
        type="date" 
        name="dob" 
        id="dob" 
        required 
        onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="aboutApplicant">Tell us a bit more about yourself</label>
        <textarea 
        name="aboutApplicant" 
        id="about-applicant" 
        cols="30" rows="10" min="100" 
        required 
        placeholder="e.g. what you do, if you have other pets, the environment the pet is going to live in..." 
        onChange={handleChange} ></textarea>
      </div>
      <input type="submit" value="send application" className="yellow-btn" />
    </form>
  )
}

export default AdoptionForm;