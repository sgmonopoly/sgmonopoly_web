export function test(state = {}, {
  type,
  data
}) {
  switch (type) {
    case 'test':
      return state
    default:
      return state
  }
}