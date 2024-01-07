function Show({ minutes, seconds }) {
  return (
    <div className="time-display ">
      <span>
        {minutes} <span className="m"> m</span> {seconds}{" "}
        <span className="s">s</span>
      </span>
    </div>
  );
}

export default Show;
