import { WeaponBehavior } from './WeaponBehavior'

export class AxeBehavior implements WeaponBehavior {
  useWeapon(): string {
    return '斧'
  }
}
