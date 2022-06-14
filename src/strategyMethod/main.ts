import { Queen } from './Queen'
import { AxeBehavior } from './AxeBehavior'

function main() {
  const queen = new Queen(new AxeBehavior())
  console.log(queen.fight())
}

main()
