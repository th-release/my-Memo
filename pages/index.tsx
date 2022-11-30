import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'

export default function Home() {
  const router = useRouter()
  const { data, error } = useSWR('/api/session', fetcher)
  if (error) {
    router.push("/account/login?path=/")
    return <></>
  }
  if (!data) {
    return <></>
  } else {
    if (!data.status) router.push('/account/login?path=/')
    else router.push("/panel/")
    return <></>
    
  }
}
