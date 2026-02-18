import { createClient } from '@supabase/supabase-js'

// Get environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

// Initialize Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

/**
 * Fetch all projects from Supabase
 * @returns {Promise<Array>} Array of project objects
 */
export const fetchProjects = async () => {
    try {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) throw error
        return data || []
    } catch (error) {
        console.error('Error fetching projects:', error)
        // Rethrow so consumers (hooks/components) can surface an error state
        throw error
    }
}

/**
 * Fetch a single project by ID
 * @param {string} id - Project ID
 * @returns {Promise<Object>} Project object
 */
export const fetchProjectById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .eq('id', id)
            .single()

        if (error) throw error
        return data
    } catch (error) {
        console.error('Error fetching project:', error)
        return null
    }
}
