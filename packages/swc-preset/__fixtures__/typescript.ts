const numberToString = (n: number) => {
  return n.toString()
}

function wrapInArray<Type>(input: Type): Type[] {
  return [input]
}

const stringArray = wrapInArray('hello generics')

export { numberToString, wrapInArray, stringArray }
