import Error from 'components/Error';
import Loading from 'components/Loading';
import PostList from 'components/PostList';
import React, { useEffect } from 'react';
import { useGetAllPostsQuery } from 'services/postsApi';
import { ToastEmit, Toast } from 'utils/flashMessages';

function Home({ isAddPost, setIsAddPost }) {
  const { data, isFetching, error } = useGetAllPostsQuery();
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
    return () => {
      setPosts([]);
    };
  }, [data]);

  if (isFetching) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (isAddPost) {
    ToastEmit('success', 'Post added successfully!');
    setTimeout(() => {
      setIsAddPost(false);
    }, 4000);
  }

  return (
    <div className='min-w-full flex flex-1 h-full'>
      {isAddPost && <Toast />}
      <PostList posts={posts} loading={isFetching} />
    </div>
  );
}

export default Home;
