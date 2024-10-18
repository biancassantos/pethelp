import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const getImages = async () => {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random/20');
  return response.data.message;
}

const usePetImages = () => {
  const query = useQuery({
    queryKey: ['get-pet-images'],
    queryFn: getImages
  })

  return query;
}

export default usePetImages;