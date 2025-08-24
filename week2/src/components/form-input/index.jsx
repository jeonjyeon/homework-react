import INPUT_CONFIG from '../../data/input-config.json'
import { useState } from 'react'
import TogglePasswordVisibilityButton from '@/components/toggle-password-visibilty-button'

export default function FormInput({ input, value, onChange, formType }) {
  const { type, label, placeholder } = INPUT_CONFIG[input]
  const id = `${formType}-${input}`
  const [show, setShow] = useState(false)

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          id={id}
          name={input}
          type={type === 'password' ? (show ? 'text' : 'password') : type}
          autoComplete="on"
          className="w-full border-b border-gray-300 pb-3 text-sm font-[normal] leading-5 tracking-normal text-[#62636C]"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
        {/* 패스워드 보이기/숨기기 버튼 */}
        {type === 'password' && (
          <TogglePasswordVisibilityButton
            show={show}
            onClick={() => setShow((prev) => !prev)}
          />
        )}
      </div>
    </>
  )
}
