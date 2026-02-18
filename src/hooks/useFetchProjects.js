import { useState, useEffect } from 'react'
import { fetchProjects } from '../lib/supabaseClient'

// Development fallback mock data (used when Supabase table missing or for local dev)
const mockProjects = [
    { id: 'm1', title: 'Mock: Global Funding Analysis', description: 'Sample project showing funding analysis.', tags: ['Power BI'], image: '', liveLink: '#', githubLink: '#' },
    { id: 'm2', title: 'Mock: E-commerce Insights', description: 'Sample e-commerce case study.', tags: ['Tableau'], image: '', liveLink: '#', githubLink: '#' },
]

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

/**
 * Custom hook to fetch projects from Supabase
 * @returns {Object} { projects, loading, error }
 */
export const useFetchProjects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true)
                const data = await fetchProjects()
                setProjects(data)
                setError(null)
            } catch (err) {
                // If table doesn't exist (404 / PGRST205) or developer opts in, use mock data
                if (USE_MOCK) {
                    setProjects(mockProjects)
                    setError(null)
                } else {
                    setError(err.message || String(err))
                    setProjects([])
                }
            } finally {
                setLoading(false)
            }
        }

        loadProjects()
    }, [])

    return { projects, loading, error }
}
