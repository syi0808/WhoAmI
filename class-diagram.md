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
