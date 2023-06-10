
import { createOverload } from 'rl_basic_core/utils'

const getUser = createOverload()

getUser.add(() => {
  console.log('获取所有用户')
})

function pageSearch(current: number, size = 10) {
  console.log(`第${current}页，每页${size}人`)
}

getUser.add('number', pageSearch)

getUser.add('number', 'number', pageSearch)

getUser.add('string', (name: string) => {
  console.log(`姓名${name}`)
})

getUser.add('string', 'number', (name: string, age: number) => {
  console.log(`${name}-${age}`)
})

function App() {
  return (
    <>
      <button onClick={() => getUser()}>获取所有用户</button>
      <button onClick={
        () => getUser('卢本伟')
      }>根据姓名获取</button>
      <button onClick={
        () => getUser(12)
      }>根据页码获取</button>
      <button onClick={
        () => getUser(1, 30)
      }>根据页码和每页多少个获取</button>

      <button onClick={
        () => getUser('卢本伟', 22)
      }>根据姓名，年龄获取</button>
    </>
  )
}

export default App
