import { Children } from "react"
import Footer from "../components/Admin/Footer"
import Navbar from "../components/Admin/Navbar"
import Sidebar from "../components/Admin/Sidebar"

const AdminStructure = ({ children }) => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />
        <main className="flex-grow-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminStructure
