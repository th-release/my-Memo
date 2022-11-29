import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { session } = req.cookies

  try {
    if (session) {
      
    } else {
      throw("로그인이 필요한 서비스 입니다.");
    }
  } catch (e) {
    return res.send({
      status: false,
      msg: e
    });
  }
}
