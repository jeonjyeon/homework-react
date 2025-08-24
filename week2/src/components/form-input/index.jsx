import INPUT_CONFIG from '../../data/input-config.json'

export default function FormInput({ input, value, onChange, formType }) {
  const { type, label, placeholder } = INPUT_CONFIG[input]
  const id = `${formType}-${input}`

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={input}
        type={type}
        autoComplete="on"
        className="w-full border-b border-gray-300 pb-3 text-sm font-[normal] leading-5 tracking-normal text-[#62636C]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}
