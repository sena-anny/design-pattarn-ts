import { WeaponBehavior } from './WeaponBehavior'

export abstract class Charactor {
  private weapon: WeaponBehavior
  protected constructor(w: WeaponBehavior) {
    this.weapon = w
  }

  fight(): string {
    return this.weapon.useWeapon()
  }
}
