export default function FormInput({ type }) {
  return (
    <>
      <h3 className="w-full text-base font-semibold leading-5 tracking-normal text-[#26262C]">
        {type === 'email' ? '이메일' : '패스워드'}
      </h3>
      <input
        type={type}
        className="w-full border-b border-gray-300 pb-3 text-sm font-[normal] leading-5 tracking-normal text-[#62636C]"
        placeholder={
          type === 'email'
            ? 'user@company.io'
            : '숫자, 영문 조합 6자리 이상 입력'
        }
      />
    </>
  )
}
