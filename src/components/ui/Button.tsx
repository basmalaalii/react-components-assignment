import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'danger'

interface ButtonProps {
  text: string
  onClick?: () => void
  variant?: ButtonVariant
  disabled?: boolean
}

function Button({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  )
}

export default Button
