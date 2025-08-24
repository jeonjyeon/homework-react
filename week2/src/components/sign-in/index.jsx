import FormButton from '../form-button'
import FormInput from '../form-input'

export default function SignIn() {
  return (
    <>
      <h2 className="font-[Spoqa_Han_Sans_Neo] font-bold text-2xl">Sign In</h2>
      <div className="relative w-full h-60 flex flex-col items-center gap-[-24px] opacity-100 p-0">
        <form className="font-[Spoqa_Han_Sans_Neo] w-full h-[220px] flex flex-col gap-y-3 gap-x-3 pt-6 pb-16 px-6 rounded-lg left-0 top-0 bg-white">
          <FormInput type="email" />
          <FormInput type="password" />
          <FormButton>로그인</FormButton>
        </form>
      </div>
    </>
  )
}
