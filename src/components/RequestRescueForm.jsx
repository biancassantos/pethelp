import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

const rescueSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email(),
  address: z.string().min(1, "Adress is required."),
  species: z.string(),
  situation: z.string(),
  situationText: z.string().min(100, "Message must be at least 100 characters long.")
})

const RequestRescueForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(rescueSchema)
  });
  
  const onSubmit = async (data) => {
    // submit to server
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Your name</label>
        <input 
        {...register("name")}
        type="text"
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
        <label htmlFor="address">Address of the rescue</label>
        <input 
        {...register("address")}
        type="text"
        id="address"
        />
       {errors.address && <p className='error'>{errors.address.message}</p>}
      </div>
      <div>
        <label htmlFor="species">Species</label>
        <select 
        {...register("species")}
        id="species"
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="situation">Situation of the pet</label>
        <div className="radio-input">
          <input 
          {...register("situation")}
          type="radio"
          id="stray"
          value="stray"
          checked
          />
          <label htmlFor="stray">Stray</label>
          <input 
          {...register("situation")}
          type="radio"
          id="hasOwners"
          value="hasOwners"
          />
          <label htmlFor="hasOwners">Has owners</label>
        </div>
      </div>
      <div>
        <label htmlFor="situationText">Tell us more about the situation</label>
        <textarea 
        {...register("situationText")}
        id="situationText"
        cols="30" rows="10"
        placeholder="Describe the situation of the pet"
        >
        </textarea>
        {errors.situationText && <p className='error'>{errors.situationText.message}</p>}
      </div>
      <input type="submit" value={isSubmitting ? "sumbmitting..." : "send request"} disabled={isSubmitting} />
    </form>
  )
}

export default RequestRescueForm;