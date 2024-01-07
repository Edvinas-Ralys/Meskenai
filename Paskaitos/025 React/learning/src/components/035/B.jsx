import C from "./C";

function B({counter01}) {
  return (
    <div className="big-bin b">
      <h1>B BIN</h1>
      <C counter01={counter01} />
    </div>
  );
}

export default B;
