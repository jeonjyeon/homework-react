import CELEBRITY from './data/celebrity.json'
import { useEffect, useState } from 'react'
import SearchForm from './components/search-form'
import SearchedCardList from './components/searched-card-list'

export default function SearchCelebrity() {
  const [keyword, setKeyword] = useState('')
  const [filtered, setFiltered] = useState(CELEBRITY)

  // URL 쿼리에서 검색어 읽기
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const query = params.get('q') || ''
    setKeyword(query)
    setFiltered(getFilteredList(query))
  }, [])

  // 뒤로가기/앞으로가기 시 UI 동기화
  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search)
      const query = params.get('q') || ''
      setKeyword(query)
      setFiltered(getFilteredList(query))
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // 검색 버튼 클릭 시 URL 변경
  const handleSearch = (q) => {
    const normalized = q.trim()
    const params = new URLSearchParams(window.location.search)
    if (normalized) {
      params.set('q', normalized)
    } else {
      params.delete('q')
    }
    window.history.pushState({}, '', `?${params}`)
    setFiltered(getFilteredList(normalized))
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <SearchForm
        keyword={keyword}
        setKeyword={setKeyword}
        onSearch={handleSearch}
      />
      {filtered.length > 0 ? (
        <SearchedCardList list={filtered} />
      ) : (
        <p className="text-center">검색 결과가 없습니다.</p>
      )}
    </div>
  )
}

function getFilteredList(query) {
  const normalizedQuery = query.trim()
  if (!normalizedQuery) return CELEBRITY
  return CELEBRITY.filter(
    (celeb) =>
      celeb.name_kr.includes(normalizedQuery) ||
      celeb.name_en.toLowerCase().includes(normalizedQuery.toLowerCase()) ||
      celeb.tag.some((tag) => tag.includes(normalizedQuery))
  )
}
