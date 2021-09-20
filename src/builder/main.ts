import { TextBuilder } from './TextBuilder'
import { Director } from './Director'
import { HtmlBuilder } from './HtmlBuilder'

type BuilderType = 'plain' | 'html'

export function builderFunc(builderType: BuilderType): void {
  if (builderType === 'plain') {
    const textBuilder = new TextBuilder()
    const director = new Director(textBuilder)
    director.construct()
    const result = textBuilder.getResult()
    console.log(result)
  } else if (builderType === 'html') {
    const htmlBuilder = new HtmlBuilder()
    const director = new Director(htmlBuilder)
    director.construct()
    const filename = htmlBuilder.getResult()
    console.log(`${filename}が作成されました`)
  }
}
