## hooks

### useState
### useEffect

```react
function App() {

    const [num, setNum] = useState(0)
    useEffect(() => {
        console.log('useEffect')

        const timer = setInterval(() => {
            console.log(num)
        }, 1000)

        return () => {
            console.log('clean up')
            clearInterval(timer)
        }
    },[])
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => {
                setNum(num + 1)
            }}>加一</button>
        </div>
    )
}

[] - 依赖数组
() => {} 销毁函数
不填依赖数组,每次组件渲染都会执行
填了依赖数组,只有依赖数组中的值发生变化,才会执行
```

### useLayoutEffect

useEffect 的 effect 函数会在操作 dom 之后异步执行：


### useReducer

```react

interface Data {
    result: number
}

interface Action {
    type: 'add' | 'minus'
    num: number
}


function reducer(state: Data, action: Action) {

    switch (action.type) {
        case 'add':
            return {
                result: state.result + action.num
            }
        case'minus':
            return {
                result: state.result - action.num
            }
        default:
            return state
    }
}
function App() {
  const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0});

  return (
    <div>
        <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
        <div onClick={() => dispatch({ type: 'minus', num: 1 })}>减</div>
        <div>{res.result}</div>
    </div>
  );
}



```