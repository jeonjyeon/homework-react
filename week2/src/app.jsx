import SignIn from './components/sign-in'
import SignUp from './components/sign-up'

export default function App() {
  return (
    <div className="p-8 space-y-8 bg-gray-200">
      <h1 className="font-[Spoqa_Han_Sans_Neo] font-bold text-4xl">
        상태가 있는 컴포넌트
      </h1>
      <SignIn />
      <SignUp />
    </div>
  )
}
