import { iteratorFunc } from './iterator/main'
import { adopterFunc } from './adapter/main'
import { templateMethodFunc } from './templateMethod/main'
import { factoryMethodFunc } from './factoryMethod/main'
import { singletonFunc } from './singleton/main'

function start() {
  iteratorFunc()
  adopterFunc()
  templateMethodFunc()
  factoryMethodFunc()
  singletonFunc()
}

start()
