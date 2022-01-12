/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState, useEffect } from 'react';
import { persistInStorage, loadFromStorage } from '../../utils';
import CardImage from '../../components/CardImage';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
import PostBox from '../../components/PostBox';
import Typography from '../../components/Typography';
import Avatar from '../../components/Avatar';
import TextInput from '../../components/TextInput';
import CardContent from '../../components/CardContent';
import './index.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const persistedData = loadFromStorage('posts');
    if (persistedData?.data) {
      setPosts([...persistedData.data]);
    }
  }, []);
  const handlePost = (post) => {
    setPosts((prev) => [post, ...prev]);
    persistInStorage(post, 'posts');
    setOpen((prev) => !prev);
  };

  const handleModal = (e) => {
    if (e.target === e.currentTarget) {
      setOpen((prev) => !prev);
    }
  };

  const memoisedHandleModal = useCallback((e) => handleModal(e), []);

  return (
    <>
      <Navbar />
      <article className="App__root">
        {open ? (
          <Modal handleModal={memoisedHandleModal}>
            <PostBox handlePost={handlePost} />
          </Modal>
        ) : (
          <header className="App__header">
            <Avatar width="4rem" height="4rem" />
            <TextInput
              type="text"
              name="input"
              className="App__input"
              placeholder="Write something here..."
              onClick={handleModal}
            />
          </header>
        )}

        {posts.length ? (
          posts.map((post, idx) => (
            <CardContent key={idx} className="App__postCard">
              <div>
                <Avatar width="4rem" height="4rem" />
                <Typography variant="body1" component="h5">
                  {post.caption}
                </Typography>
              </div>
              <CardImage url={post.url} alt={post.title} />
            </CardContent>
          ))
        ) : (
          <Typography component="h3" variant="h3">
            Create Posts to get started
          </Typography>
        )}
      </article>
    </>
  );
};

export default App;
