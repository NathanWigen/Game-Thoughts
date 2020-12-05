import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'

export default function Layout(props) {
  return (
    <div className="App">
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      {props.children}
      <Footer />
    </div>
  )
}