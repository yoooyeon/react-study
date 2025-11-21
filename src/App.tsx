import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="min-h-screen p-8">
    
      <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-12 text-gray-900">
        TodoList
      </h1>
        <div className="flex justify-center">
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App