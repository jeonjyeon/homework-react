import FormButton from '../form-button'
import FormInput from '../form-input'
import { useState } from 'react'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const PW_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim().length < 2) {
      alert('이름은 2글자 이상이어야 합니다.')
      return
    }

    if (!PW_REGEX.test(password)) {
      alert('비밀번호는 숫자와 영문 조합 6자리 이상이어야 합니다.')
      return
    }

    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    // 회원가입 로직
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Password Check:', passwordCheck)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') {
      setName(value)
    } else if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'passwordCheck') {
      setPasswordCheck(value)
    }
  }
  return (
    <div>
      <h2 className="font-[Spoqa_Han_Sans_Neo] font-bold text-2xl mb-2">
        Sign Up
      </h2>
      <div className="relative w-full h-fit flex flex-col items-center gap-[-24px] opacity-100 p-0">
        <form
          onSubmit={handleSubmit}
          className="font-[Spoqa_Han_Sans_Neo] w-full h-[400px] flex flex-col gap-y-3 gap-x-3 pt-6 pb-16 px-6 rounded-lg left-0 top-0 bg-white"
        >
          <FormInput
            input="name"
            value={name}
            onChange={handleInputChange}
            formType="signup"
          />
          <FormInput
            input="email"
            value={email}
            onChange={handleInputChange}
            formType="signup"
          />
          <FormInput
            input="password"
            value={password}
            onChange={handleInputChange}
            formType="signup"
          />
          <FormInput
            input="passwordCheck"
            value={passwordCheck}
            onChange={handleInputChange}
            formType="signup"
          />
          <FormButton>회원가입</FormButton>
        </form>
      </div>
    </div>
  )
}
