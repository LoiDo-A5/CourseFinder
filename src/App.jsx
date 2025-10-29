import React, { useEffect } from 'react'
import CoursesApp from './courses/CoursesApp.jsx'

const PAGE_TITLE = 'Họ và Tên - MASV'

export default function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return <CoursesApp />
}
