import { ContextoTema } from './ThemeManager'
import { useContext } from 'react'

export default function ThemeSelector() {
    const { tema, cambiarTema } = useContext(ContextoTema)

    return (
        <button onClick={cambiarTema}>
            {tema === 'dark' ? '🌙' : '☀️'}
        </button>
    )
}