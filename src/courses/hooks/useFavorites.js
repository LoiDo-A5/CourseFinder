import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'favorites_courses'

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {}
  }, [favorites])

  const isFavorite = useMemo(() => {
    const set = new Set(favorites)
    return (id) => set.has(id)
  }, [favorites])

  function toggleFavorite(id) {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  return { favorites, isFavorite, toggleFavorite }
}
