# text-scroller

A React component for scrolling text horizontally or vertically.

## Installation

Install the component using npm:

```bash
npm install text-scroller
```

## Usage

Here is an example of how to use the `TextScroller` component in your React application:

```jsx
import React from "react";
import TextScroller from "text-scroller";

function App() {
  return (
    <div className="App">
      <TextScroller
        direction="horizontal"
        infinite={false}
        speed={10}
        pauseOnHover={true}
        className="horizontal-scroller"
      >
        This is a long text that will scroll horizontally. This is a long text
        that will scroll horizontally.
      </TextScroller>
      <TextScroller
        direction="vertical"
        infinite={false}
        speed={10}
        pauseOnHover={true}
        className="vertical-scroller"
      >
        This is a long text that will scroll vertically. This is a long text
        that will scroll vertically. This is a long text that will scroll
        vertically.
      </TextScroller>
    </div>
  );
}

export default App;
```

## Props

The `TextScroller` component accepts the following props:

- `children` (string, required): The text content to scroll.
- `direction` (string, optional): The scroll direction, either `horizontal` or `vertical`. Default is `horizontal`.
- `infinite` (boolean, optional): Whether the scroll is infinite or not. Default is `false`.
- `speed` (number, optional): The duration (in seconds) for one complete scroll cycle. Default is `10`.
- `pauseOnHover` (boolean, optional): Whether to pause the scroll on mouse hover. Default is `true`.
- `className` (string, optional): Additional class names to style the component.
- `style` (object, optional): Inline styles to apply to the component.

## Example

### Horizontal Scrolling Example

```jsx
<TextScroller
  direction="horizontal"
  infinite={false}
  speed={10}
  pauseOnHover={true}
  className="horizontal-scroller"
>
  This is a long text that will scroll horizontally.
</TextScroller>
```

### Vertical Scrolling Example

```jsx
<TextScroller
  direction="vertical"
  infinite={false}
  speed={10}
  pauseOnHover={true}
  className="vertical-scroller"
>
  This is a long text that will scroll vertically. This is a long text that will
  scroll vertically.
</TextScroller>
```

### Custom Styles

You can control the size and appearance of the scroller using `className` or `style` props:

```jsx
<TextScroller
  direction="horizontal"
  infinite={false}
  speed={10}
  pauseOnHover={true}
  style={{ width: "300px", height: "50px", border: "1px solid black" }}
>
  This is a long text that will scroll horizontally with custom styles.
</TextScroller>
```

## Development

To run the component locally:

1. Clone the repository.
2. Install dependencies: `npm install`
3. Build the component: `npm run build`
4. Run the example app: `npm start`

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
