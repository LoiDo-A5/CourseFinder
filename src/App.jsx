import React, { useEffect } from 'react'
import CoursesApp from './courses/CoursesApp.jsx'

const PAGE_TITLE = 'Đỗ LợI - K23DTCN035'

export default function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return <CoursesApp />
}
