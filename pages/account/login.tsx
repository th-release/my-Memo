import { useState } from "react"

export default function Login() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submit = async () => {
    event?.preventDefault();
    await fetch("", {
      method: "POST",
      body: JSON.stringify({
        id,
        password
      })
    }).then(res => res.json())
  }
  
  return (
    <div>
    </div>
  )
}