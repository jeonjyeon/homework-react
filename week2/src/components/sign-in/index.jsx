import FormButton from '../form-button'
import FormInput from '../form-input'
import { useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const PW_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!PW_REGEX.test(password)) {
      alert('비밀번호는 숫자와 영문 조합 6자리 이상이어야 합니다.')
      return
    }

    // 로그인 로직
    console.log('Email:', email)
    console.log('Password:', password)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  return (
    <div>
      <h2 className="font-[Spoqa_Han_Sans_Neo] font-bold text-2xl mb-2">
        Sign In
      </h2>
      <div className="relative w-full h-fit flex flex-col items-center gap-[-24px] opacity-100 p-0">
        <form
          onSubmit={handleSubmit}
          className="font-[Spoqa_Han_Sans_Neo] w-full h-[240px] flex flex-col gap-y-3 gap-x-3 pt-6 pb-16 px-6 rounded-lg left-0 top-0 bg-white"
        >
          <FormInput
            input="email"
            value={email}
            onChange={handleInputChange}
            formType="signin"
          />
          <FormInput
            input="password"
            value={password}
            onChange={handleInputChange}
            formType="signin"
          />
          <FormButton>로그인</FormButton>
        </form>
      </div>
    </div>
  )
}
