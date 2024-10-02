/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import pets from "../pets";
import { useNavigate } from 'react-router-dom';

const adoptSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email(),
  address: z.string().min(1, "Adress is required."),
  dob: z.string(),
  aboutApplicant: z.string().min(100, "Message must be at least 100 characters long.")
})

const AdoptionForm = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(adoptSchema)
  });

  const navigate = useNavigate();
 
  const onSubmit = async (data) => {
    // submit to server
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    reset();
    navigate('/pethelp/adopt/confirmed');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="pet">Application for</label>
        <input 
        {...register("pet")}
        type="text"
        id="pet"
        value={`${id} - ${pets[id].name}`}
        disabled
        />
      </div>
      <div>
        <label htmlFor="name">Your name</label>
        <input 
        {...register("name")}
        type="text" 
        name="name" 
        id="name" 
        />
        {errors.name && <p className='error'>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input 
        {...register("email")}
        type="email"
        id="email"
        />
        {errors.email && <p className='error'>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input 
        {...register("address")}
        type="text" 
        id="address" 
        />
        {errors.address && <p className='error'>{errors.address.message}</p>}
      </div>
      <div>
        <label htmlFor="dob">Date of birth</label>
        <input 
        {...register("dob")}
        type="date"
        id="dob"
        />
      </div>
      <div>
        <label htmlFor="aboutApplicant">Tell us a bit more about yourself</label>
        <textarea 
        {...register("aboutApplicant")}
        id="about-applicant" 
        cols="30" rows="10" 
        placeholder="e.g. what you do, if you have other pets, the environment the pet is going to live in..." 
        >
        </textarea>
        {errors.aboutApplicant && <p className='error'>{errors.aboutApplicant.message}</p>}
      </div>
      <input 
      type="submit" 
      value={isSubmitting ? "submitting..." : "send application"}
      disabled={isSubmitting}
      className="yellow-btn" />
    </form>
  )
}

export default AdoptionForm;