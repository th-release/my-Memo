import NextHead from 'next/head'

const Head = () => {
  return (
    <>
      <NextHead>
        <title>마이 메모</title>
        <meta name="description" content="나의 일기, 메모들을 적어서 간직해요! - 마이-메모" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
    </>
  )
}

export default Head;