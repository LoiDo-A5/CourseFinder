import React from 'react'

export default function CourseFilters({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories
}) {
  return (
    <div className="row g-2 align-items-end mb-3">
      <div className="col-12 col-md-6">
        <label className="form-label">Tìm kiếm khóa học</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nhập tên khóa học..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="col-6 col-md-3">
        <label className="form-label">Danh mục</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Tất cả</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="col-6 col-md-3">
        <label className="form-label">Sắp xếp</label>
        <select
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Mặc định</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="rating-desc">Đánh giá giảm dần</option>
        </select>
      </div>
    </div>
  )
}
