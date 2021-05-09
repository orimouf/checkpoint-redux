
const Data = [
    {
        id: "1",
        description: "as asAKS sAKMSaa",
        isDone: false
    },
    {
        id: "2",
        description: "opkfpo pokpoasd",
        isDone: false
    },
    {
        id: "3",
        description: "sdas dasdfsd fsdds",
        isDone: false
    }
]
function Task() {
    return (
        Data.map((ele) => (
            <div class="box">
                <p class="todoText">{ele.description}</p>
                <p class="xIcon">x</p>
            </div>
        ))  
    );
  }
  
export default Task;