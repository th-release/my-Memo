import { check, verify } from '../../utils/jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  status: boolean,
  msg: string | unknown
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { session } = req.cookies
  const result = check(session!.toString());
  if (!result.status) {
    return res.send({
      status: result.status,
      msg: result.msg
    })
  } else {
    return res.send({
      status: result.status,
      msg: result.msg
    })
  }
}
