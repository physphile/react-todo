import PageHome from "./components/pages/PageHome";
import SuperHeader from "./components/SuperHeader";
import TasksListProvider from "./hooks/TasksList";

function App() {
  return (
      <TasksListProvider>
              <SuperHeader />
              <PageHome />
      </TasksListProvider>
  );
}

export default App;
