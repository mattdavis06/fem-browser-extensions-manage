import { Switch } from '../ui/switch'

type ToggleSwitchProps = {
  isActive: boolean
  toggleActive: () => void
}

const ToggleSwitch = ({ isActive, toggleActive }: ToggleSwitchProps) => {
  return <Switch checked={isActive} onCheckedChange={toggleActive} />
}

export default ToggleSwitch
