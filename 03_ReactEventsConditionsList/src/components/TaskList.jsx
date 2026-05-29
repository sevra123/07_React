function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one to get started</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
}

export default TaskList;
