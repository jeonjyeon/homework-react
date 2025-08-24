import { EyeOffIcon, EyeOnIcon } from '@/components/eye-icon'

export default function TogglePasswordVisibilityButton({ show, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2"
    >
      {show ? <EyeOnIcon /> : <EyeOffIcon />}
    </button>
  )
}
