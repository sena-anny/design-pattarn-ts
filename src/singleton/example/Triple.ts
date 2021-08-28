export class Triple {
  private static triples: Triple[] = [
    new Triple(0),
    new Triple(1),
    new Triple(2),
  ]
  private readonly id: number
  private constructor(id: number) {
    console.log(`インスタンス${id}を生成しました`)
    this.id = id
  }
  static getInstance(id: number): Triple {
    if (this.triples[id]) {
      return this.triples[id]
    }
    return this.triples[0]
  }
  toString(): string {
    return `[Triple id = ${this.id}]`
  }
}
