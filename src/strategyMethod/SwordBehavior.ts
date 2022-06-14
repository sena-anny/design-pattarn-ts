import { WeaponBehavior } from './WeaponBehavior'

export class SwordBehavior implements WeaponBehavior {
  useWeapon(): string {
    return '剣'
  }
}
