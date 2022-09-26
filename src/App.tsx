import { Menu, Footer } from "./components";
import { EmptyState } from "./layouts";

const App = () => {
  return (
    <>
    <main className="bg-slate-200">
      <Menu />
      <EmptyState />
      <Footer />
    </main>
    </>
  )
}

export default App;