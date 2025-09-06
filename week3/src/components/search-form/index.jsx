export default function SearchForm({ keyword, setKeyword, onSearch }) {
  return (
    <form
      className="self-center flex gap-2 mb-4"
      onSubmit={(e) => {
        e.preventDefault()
        onSearch(keyword)
      }}
    >
      <input
        className="w-100 border-2 border-gray-300 rounded-md p-4"
        type="text"
        aria-label="검색어 입력"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="가수 이름, 데뷔곡, 솔로, 그룹, 밴드 등"
      />
      <button
        className="bg-blue-500 text-white rounded-md p-4 cursor-pointer"
        type="submit"
      >
        검색
      </button>
    </form>
  )
}
