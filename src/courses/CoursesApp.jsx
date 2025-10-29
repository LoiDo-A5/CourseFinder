import React, { useEffect, useMemo, useState } from 'react'
import CourseFilters from './components/CourseFilters.jsx'
import CourseCard from './components/CourseCard.jsx'
import CourseModal from './components/CourseModal.jsx'
import { useFavorites } from './hooks/useFavorites.js'
import coursesData from './data/courses.json'

export default function CoursesApp() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')
  const [selected, setSelected] = useState(null)
  const { isFavorite, toggleFavorite } = useFavorites()

  const categories = useMemo(() => Array.from(new Set(coursesData.map((c) => c.category))), [])

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase()
    let list = coursesData.filter((c) => (s ? c.title.toLowerCase().includes(s) : true))
    if (category) list = list.filter((c) => c.category === category)
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating-desc') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [search, category, sort])

  useEffect(() => {
    console.log('Danh sách khóa học hiển thị:', filtered.map((c) => c.title))
  }, [filtered])

  return (
    <div className="container py-3">
      <h1 className="mb-3">Tìm kiếm khóa học</h1>
      <CourseFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />

      <div className="row g-3">
        {filtered.map((course) => (
          <div key={course.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <CourseCard
              course={course}
              favorite={isFavorite(course.id)}
              onToggleFavorite={toggleFavorite}
              onOpen={setSelected}
            />
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-12">
            <div className="alert alert-warning mb-0">Không tìm thấy khóa học phù hợp.</div>
          </div>
        )}
      </div>

      <CourseModal open={!!selected} course={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
