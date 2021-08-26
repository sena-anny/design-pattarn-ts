import { iteratorFunc } from './iterator/main'
import { adopterFunc } from './adapter/main'
import { templateMethodFunc } from './templateMethod/main'
import { factoryMethodFunc } from './factoryMethod/main'

function start() {
  iteratorFunc()
  adopterFunc()
  templateMethodFunc()
  factoryMethodFunc()
}

start()
