export default function SignIn() {
  return (
    <div className="flex flex-col gap-6 max-w-lg mx-auto mt-10 p-4 border rounded text-center">
      <h2 className="font-bold text-2xl">로그인</h2>
      <form className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_2fr] gap-x-6">
          <label className="font-semibold" htmlFor="email">
            이메일
          </label>
          <input
            className="border border-gray-300 p-2 rounded hover:bg-gray-100"
            type="email"
            id="email"
            placeholder="이메일"
            name="email"
          />
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
            name="password"
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 mt-4 rounded text-lg font-semibold hover:bg-blue-600 cursor-pointer"
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  )
}
