function Create({ minutes, setMinutes, seconds, setSeconds }) {
  return (
    <>
      <div className="timer">
        <div className="minutes">
          <input
            type="number"
            placeholder="00"
            name="minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
          <span className="m">m</span>
        </div>
        <div className="seconds">
          <input
            type="number"
            placeholder="00"
            name="seconds"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
          />
          s
        </div>
      </div>
    </>
  );
}

export default Create;
