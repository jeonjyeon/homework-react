export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 max-w-lg mx-auto mt-10 p-4 border rounded text-center">
      <h2 className="font-bold text-2xl">대시보드</h2>
      <button className="bg-blue-500 text-white p-2 rounded absolute hover:bg-blue-600">
        글 작성하기
      </button>
      <main>
        <h3 className="font-bold text-xl mb-4">글 목록</h3>
        <ul className="flex flex-col gap-4">
          <li className="border-b pb-2">
            <h4 className="font-semibold text-lg">글 제목 1</h4>
            <p className="text-gray-600">글 내용 요약 1...</p>
          </li>
          <li className="border-b pb-2">
            <h4 className="font-semibold text-lg">글 제목 2</h4>
            <p className="text-gray-600">글 내용 요약 2...</p>
          </li>
          <li className="border-b pb-2">
            <h4 className="font-semibold text-lg">글 제목 3</h4>
            <p className="text-gray-600">글 내용 요약 3...</p>
          </li>
        </ul>
      </main>
    </div>
  )
}
