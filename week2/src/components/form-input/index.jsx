import INPUT_CONFIG from '../../data/input-config.json'

export default function FormInput({ input }) {
  const { type, label, placeholder } = INPUT_CONFIG[input]

  return (
    <>
      <h3 className="w-full text-base font-semibold leading-5 tracking-normal text-[#26262C]">
        {label}
      </h3>
      <input
        type={type}
        className="w-full border-b border-gray-300 pb-3 text-sm font-[normal] leading-5 tracking-normal text-[#62636C]"
        placeholder={placeholder}
      />
    </>
  )
}
