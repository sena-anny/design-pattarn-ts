interface GUIFactory {
  createButton(): Button
  createCheckbox(): Checkbox
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton()
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox()
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton()
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox()
  }
}

interface Button {
  paint(): string
}

class WinButton implements Button {
  paint(): string {
    return 'win button'
  }
}
class MacButton implements Button {
  paint(): string {
    return 'mac button'
  }
}

interface Checkbox {
  paint(): string
  clickButton(collaborator: Button): string
}

class WinCheckbox implements Checkbox {
  paint(): string {
    return 'win checkbox'
  }
  clickButton(collaborator: Button): string {
    const result = collaborator.paint()
    return `win checkbox and ${result}`
  }
}

class MacCheckbox implements Checkbox {
  paint(): string {
    return 'mac checkbox'
  }
  clickButton(collaborator: Button): string {
    const result = collaborator.paint()
    return `mac checkbox and ${result}`
  }
}

// class Application {
//   private factory: GUIFactory
//   private readonly button: Button
//   private checkbox: Checkbox
//
//   constructor(factory: GUIFactory) {
//     this.factory = factory
//     this.button = factory.createButton()
//     this.checkbox = factory.createCheckbox()
//   }
//
//   paint(): string {
//     return `${this.checkbox.paint()} +++ ${this.checkbox.paint()} +++ ${this.checkbox.clickButton(
//       this.button
//     )}`
//   }
// }

function clientCode(factory: GUIFactory) {
  const button = factory.createButton()
  const checkbox = factory.createCheckbox()

  console.log(checkbox.paint())
  console.log(checkbox.clickButton(button))
}

console.log('Win')
clientCode(new WindowsFactory())
console.log('end')

console.log('Mac')
clientCode(new MacFactory())
console.log('end')
