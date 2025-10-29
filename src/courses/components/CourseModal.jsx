import React from 'react'

export default function CourseModal({ open, course, onClose }) {
  if (!open || !course) return null

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{course.title}</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <img
                src={course.image || 'https://picsum.photos/seed/course/800/400'}
                alt={course.title}
                className="img-fluid rounded mb-3"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = 'https://picsum.photos/seed/course/800/400'
                }}
              />
              <p className="mb-1"><strong>Giảng viên:</strong> {course.instructor}</p>
              <p className="mb-1"><strong>Danh mục:</strong> {course.category}</p>
              <p className="mb-1"><strong>Đánh giá:</strong> ★ {course.rating}</p>
              <p className="mb-3">
                <strong>Giá:</strong>{' '}
                <span className="text-danger fw-semibold">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(course.price)}
                </span>
              </p>
              <p>{course.description || course.shortDescription}</p>
              {Array.isArray(course.syllabus) && course.syllabus.length > 0 && (
                <>
                  <hr />
                  <h6 className="mb-2">Syllabus</h6>
                  <ul className="mb-0">
                    {course.syllabus.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Đóng</button>
              <button type="button" className="btn btn-primary">Đăng ký ngay</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )
}
