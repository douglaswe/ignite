import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import  "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pravatar.cc/150?img=6',
      name: 'Carlos',
      role: 'Student'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera,'},
      {type: 'paragraph', content: 'Acabei de subir um projeto no meu porttifa!,'},
      {type: 'link', content: 'jane.design/doctorcare,'},
    ],
    publishedAt: new Date('2025-08-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
      name: 'Douglas',
      role: 'Student'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera,'},
      {type: 'paragraph', content: 'Acabei de subir um projeto no meu porttifa!,'},
      {type: 'link', content: 'jane.design/doctorcare,'},
    ],
    publishedAt: new Date('2025-08-03 20:00:00'),
  },
]

function App() {

  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        {posts.map(post => {
          return(
            <Post 
            key={post.id}
            post={post}
            />
          )
        })}
      </main>
    </div>    
    </div>
  )
}

export default App
