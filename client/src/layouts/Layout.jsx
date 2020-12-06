import Header from "../components/Header/Header.jsx"
import Footer from '../components/Footer/Footer.jsx'

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