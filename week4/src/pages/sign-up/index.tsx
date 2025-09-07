import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import supabase from '@/libs/supabase'
import navigate from '@/utils/SPA/navigate'

type SignupForm = {
  user_name: string
  email: string
  password: string
  password2: string
}

export default function SignUp() {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
    reset,
  } = useForm<SignupForm>({
    mode: 'onChange',
    defaultValues: {
      user_name: '',
    },
  })

  const onSubmit = async (formData: SignupForm) => {
    const { data, error } = await supabase.auth.signUp({
      // 필수 정보
      email: formData.email,
      password: formData.password,
      // 선택적으로 정보 추가
      options: {
        data: {
          name: formData.user_name,
        },
      },
    })

    if (error) {
      toast.error(
        `회원가입 인증 오류가 발생하였습니다! [${error.status}:${error.name}:${error.message}]`
      )
    } else {
      if (data.user) {
        const { error } = await supabase.from('users').insert({
          id: data.user.id,
          name: data.user.user_metadata.user_name,
          email: data.user.user_metadata.email,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })

        if (error) {
          toast.error(
            `사용자 테이블 추가 오류가 발생하였습니다! [${error.code}:${error.name}:${error.message}]`
          )
        } else {
          toast.success(
            '회원가입에 성공했습니다! 이메일 인증 후 로그인 해주세요.                                                          '
          )
          navigate('signin')
          reset()
        }
      }
    }
  }

  return (
    <div className="flex flex-col gap-6 max-w-lg mx-auto mt-10 p-4 border rounded text-center">
      <h2 className="font-bold text-2xl">회원가입</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-[1fr_2fr] gap-x-6">
          <label className="font-semibold" htmlFor="user_name">
            사용자 이름
          </label>
          <input
            className="border border-gray-300 p-2 rounded hover:bg-gray-100"
            type="text"
            id="user_name"
            placeholder="사용자 이름"
            {...register('user_name', {
              required: '이름을 입력하세요',
              minLength: 2,
            })}
          />
          {errors.user_name && (
            <div
              role="alert"
              id="signup-name-error"
              className="text-red-500 text-sm col-span-2 mt-1"
            >
              {errors.user_name.message}
            </div>
          )}
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-x-6">
          <label className="font-semibold" htmlFor="email">
            이메일
          </label>
          <input
            className="border border-gray-300 p-2 rounded hover:bg-gray-100"
            type="email"
            id="email"
            placeholder="이메일"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            })}
          />
          {errors.email && (
            <div
              role="alert"
              id="signup-email-error"
              className="text-red-500 text-sm col-span-2 mt-1"
            >
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-x-6">
          <label className="font-semibold" htmlFor="password">
            비밀번호
          </label>
          <input
            className="border border-gray-300 p-2 rounded hover:bg-gray-100"
            type="password"
            id="password"
            placeholder="비밀번호"
            {...register('password', {
              required: '비밀번호를 입력하세요.',
              minLength: {
                value: 6,
                message: '비밀번호는 최소 6자 이상이어야 합니다.',
              },
            })}
          />
          {errors.password && (
            <div
              id="signup-password-error"
              className="text-red-500 text-sm col-span-2 mt-1"
              role="alert"
            >
              {errors.password.message}
            </div>
          )}
        </div>
        <div className="grid grid-cols-[1fr_2fr] gap-x-6">
          <label className="font-semibold" htmlFor="password2">
            비밀번호 확인
          </label>
          <input
            className="border border-gray-300 p-2 rounded hover:bg-gray-100"
            type="password"
            id="password2"
            placeholder="비밀번호 확인"
            {...register('password2', {
              required: '비밀번호를 확인하세요.',
              validate: (value) =>
                value === watch('password') || '비밀번호가 일치하지 않습니다.',
            })}
          />
          {errors.password2 && (
            <div
              id="signup-password2-error"
              className="text-red-500 text-sm col-span-2 mt-1"
              role="alert"
            >
              {errors.password2.message}
            </div>
          )}
        </div>
        <button
          className="bg-blue-500 text-white p-2 mt-4 rounded text-lg font-semibold hover:bg-blue-600 cursor-pointer"
          type="submit"
        >
          가입하기
        </button>
      </form>
    </div>
  )
}
