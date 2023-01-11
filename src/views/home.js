import ToDoList from "../component/toDoList"
import Footer from "../component/footer"
import Navbar from "../component/navbar"

function Home() {
    return (
        <div>
            <Navbar />
            <ToDoList />
            <Footer />
        </div>
    )
}

export default Home