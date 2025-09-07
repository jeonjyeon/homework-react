import Dashboard from './pages/dashboard'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'
import navigate from './utils/SPA/navigate'
import usePageQuery from './utils/SPA/use-page-query'

export default function App() {
  type Page = 'signup' | 'signin' | 'dashboard'
  const page = usePageQuery<Page>('signup')

  return (
    <div>
      <nav className="flex gap-10 p-4 bg-white items-center justify-center">
        <button
          className="font-bold text-2xl bg-gray-100 rounded-2xl p-6 cursor-pointer hover:bg-gray-900 hover:text-white"
          onClick={() => navigate('signup')}
        >
          회원가입
        </button>
        <button
          className="font-bold text-2xl bg-gray-100 rounded-2xl p-6 cursor-pointer hover:bg-gray-900 hover:text-white"
          onClick={() => navigate('signin')}
        >
          로그인
        </button>
        <button
          className="font-bold text-2xl bg-gray-100 rounded-2xl p-6 cursor-pointer hover:bg-gray-900 hover:text-white"
          onClick={() => navigate('dashboard')}
        >
          대시보드
        </button>
      </nav>
      {page === 'signup' && <SignUp />}
      {page === 'signin' && <SignIn />}
      {page === 'dashboard' && <Dashboard />}
    </div>
  )
}
