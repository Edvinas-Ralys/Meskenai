function ColorCircle({ color }) {
  return (
    <div
      className="color-circle"
      style={{ backgroundColor: color + `66`, border: `5px dashed` + color }}
    ></div>
  );
}

export default ColorCircle;
