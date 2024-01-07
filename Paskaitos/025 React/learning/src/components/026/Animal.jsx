function Animal({ animal }) {
  const randomColor = () =>
    `#` +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, 0);
  return (
    <div
      className="square"
      style={{ bgColor: randomColor() + `70`, border: `1px solid` + randomColor(), }}
    >
      {animal}
      <div className="squares"></div>
    </div>
  );
}

export default Animal;
