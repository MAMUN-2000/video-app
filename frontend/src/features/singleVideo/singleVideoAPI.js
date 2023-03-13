import axios from '../../util/axios';

export default async function singleVideoAPI (id)
{
   const response = await axios.get( 'videos/' + id );
   return response.data;
}