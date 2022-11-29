import useSWR from 'swr'
import fetcher from '../utils/fetcher'

export default function Home() {
  const { data, error } = useSWR('', fetcher)
  
  return (
    <></>
  )
}
