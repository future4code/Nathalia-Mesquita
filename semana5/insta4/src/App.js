import React from "react";
import "./App.css";
import Post from "./components/Post/Post";

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'joão',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151',
      },
      {
        nomeUsuario: 'amanda',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152',
      },
    ],
  };
  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        >
        </Post>
      );
    });
    return (
      <div>
        <div>{listaDePosts}</div>
      </div>
    );
  }
}
export default App;