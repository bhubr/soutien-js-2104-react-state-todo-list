import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {
          title: 'Display a list of tasks',
          done: true
        },
        {
          title: 'Show the number of remaining tasks',
          done: true
        },
        {
          title: 'Change the "done" attribute of a task',
          done: false
        }
      ]
    }
  }

  handleClick = (title) => {
    // 1. à partir du titre, on cherche à identifier quel objet dans le tableau on veut modifier
    // 2. immutabilité : on n'a pas le droit de modifier directement le tableau
    // 3. conséquence : on va devoir calculer un NOUVEAU tableau
    const newTasks = this.state.tasks.map(
      task => {
        // Si le titre de la tâche courante est celui de la tâche identifiée par le paramètre title, on renvoie cette tâche en inversant son "done"
        if (task.title === title) {
          const updatedTask = {};
          updatedTask.title = task.title;
          updatedTask.done = !task.done;
          // const updatedTask = { ...task, done: !task.done }; // plus court
          return updatedTask;
        }
        // Sinon, on renvoie la tâche telle quelle
        else {
          return { ...task };
        }
      }
    );

    // Remplace complètement l'ancien tableau par le nouveau
    this.setState({ tasks: newTasks });
  }

  render() {

    return (
      <div>
        # of remaining tasks: {
          this.state.tasks
            .filter(task => !task.done)
            .length
        }
        <ul>
          {
            this.state.tasks.map((task, index) => (
              <TodoItem
                key={index}
                title={task.title}
                done={task.done}
                onToggle={this.handleClick}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;