
import SuccessContent from './SuccessContent'



interface Props {
  searchParams: Promise<{ session_id?: string }>
}

export default async function Success({searchParams}:Props) {


  const { session_id } = await searchParams
 

return (


<SuccessContent session_id={session_id}/>

)
}
