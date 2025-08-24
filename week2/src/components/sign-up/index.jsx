import FormButton from '../form-button'
import FormInput from '../form-input'

export default function SignUp() {
  return (
    <div>
      <h2 className="font-[Spoqa_Han_Sans_Neo] font-bold text-2xl mb-2">
        Sign Up
      </h2>
      <div className="relative w-full h-fit flex flex-col items-center gap-[-24px] opacity-100 p-0">
        <form className="font-[Spoqa_Han_Sans_Neo] w-full h-[380px] flex flex-col gap-y-3 gap-x-3 pt-6 pb-16 px-6 rounded-lg left-0 top-0 bg-white">
          <FormInput input="name" />
          <FormInput input="email" />
          <FormInput input="password" />
          <FormInput input="passwordCheck" />
          <FormButton>회원가입</FormButton>
        </form>
      </div>
    </div>
  )
}
