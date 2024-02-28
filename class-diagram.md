| Type      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| A <\|-- B | A 컴포넌트가 B 구현에 사용됨 (Inheritance)                      |
| A \*-- B  | B 컴포넌트에서 Props를 받으며 A 컴포넌트가 호출됨 (Composition) |
| A o-- B   | B 컴포넌트에서 A 컴포넌트가 호출됨 (Aggregation)                |
| A --> B   | A 컴포넌트에서 B State에 접근 (Association)                     |
| A ..> B   | A 컴포넌트에서 B State에 접근/제어 (Dependency)                 |
| A -- B    | A, B 컴포넌트에서 서로의 State에 접근 {Link (Solid)}            |
| A .. B    | A, B 컴포넌트에서 서로의 B State에 접근/제어 {Link (Dashed)}    |

## Inheritance

```jsx
function Container({ children }) {
  return <div>{children}</div>;
}

function Component() {
  return (
    <Container>
      <span>Inheritance</span>
    </Container>
  );
}
```

## Composition

```jsx
function Container(props) {
  return <div></div>;
}

function Component(props) {
  return <Container {...props} />;
}
```

## Aggregation

```jsx
function Container() {
  return <div></div>;
}

function Component() {
  return <Container />;
}
```

## Association

```jsx
function Component() {
  const [state, setState] = useState();

  return <Child state={state} />;
}

function Child({ state }) {
  return <div>{state}</div>;
}

// or

const context = createContext({});

function Component() {
  const { state } = useContext(context);

  return <div>{state}</div>;
}
```

## Dependency

```jsx
function Component() {
  const [state, setState] = useState();

  return <Child setState={setState} />;
}

function Child({ setState }) {
  return <div onClick={() => setState()}></div>;
}

// or

const context = createContext({});

function Component() {
  const { setState } = useContext(context);

  return <div onClick={() => setState()}></div>;
}
```
