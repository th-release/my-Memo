import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export function sign(
  data:object, 
  expiresIn: string
) {
  return jsonwebtoken.sign(data, process.env.SECRET!.toString(), { expiresIn })
}

export function verify(
  token: string
) {
  return jsonwebtoken.verify(token, process.env.SECRET!.toString())
}

export function check(
  token: string
) {
  try {
    if (token) {
      if (verify(token)) {
        return {
          status: true,
          msg: ""
        }
      }
      else throw("로그인이 필요한 서비스 입니다.")
    } else {
      throw("로그인이 필요한 서비스 입니다.");
    }
  } catch (e) {
    return {
      status: false,
      msg: e
    }
  }
}