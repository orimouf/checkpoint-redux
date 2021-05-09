
function AddTask() {
  return (
    <div className="container">
        <div className="grid">
            <div className="inputBox">
                <input id="todo" type="text" placeholder="What to do !" />
                <input className="btn" type="button" value="+" />
            </div>
        </div>
    </div>
  );
}

export default AddTask;