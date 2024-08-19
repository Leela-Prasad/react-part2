import { ReactNode, useReducer } from "react";
import taskReducer from "./reducers/taskReducer";
import TasksContext from "./contexts/tasksContext";

interface Props {
    children: ReactNode;
}

function TaskProvider({children}: Props) {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return <TasksContext.Provider value={{tasks, dispatch}}>
        {children}
    </TasksContext.Provider>
}

export default TaskProvider