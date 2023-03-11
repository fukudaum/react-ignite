import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post 
        author="Gustavo Fukuda"
        content="Lorem Ipsum lalalalllal alla ala al alalalalalla"
      />
    </div>
  )
}