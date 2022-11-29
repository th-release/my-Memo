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