import React from 'react'

export default function CourseCard({ course, favorite, onToggleFavorite, onOpen }) {
  const placeholder = 'https://picsum.photos/seed/course/400/250'
  const imgSrc = course.image || placeholder
  const priceText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(course.price)
  const summary = course.shortDescription || course.description
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={imgSrc}
        className="card-img-top"
        alt={course.title}
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = placeholder
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1">{course.title}</h5>
        <div className="text-muted small mb-2">{course.instructor} • {course.category}</div>
        <div className="d-flex align-items-center mb-2">
          <span className="badge text-bg-warning me-2">★ {course.rating}</span>
          <span className="fw-semibold text-danger">{priceText}</span>
        </div>
        <p className="card-text text-truncate" style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{summary}</p>
        <div className="mt-auto d-flex gap-2">
          <button className="btn btn-primary flex-grow-1" onClick={() => onOpen(course)}>Xem chi tiết</button>
          <button
            className={`btn ${favorite ? 'btn-danger' : 'btn-outline-danger'}`}
            title={favorite ? 'Bỏ yêu thích' : 'Thêm yêu thích'}
            onClick={() => onToggleFavorite(course.id)}
            aria-pressed={favorite}
          >
            ❤
          </button>
        </div>
      </div>
    </div>
  )
}
