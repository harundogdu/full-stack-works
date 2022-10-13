import { Error, Loading, PostList } from 'components';

import React, { useEffect } from 'react';
import { useGetAllPostsQuery } from 'services/postsApi';
import { ToastEmit, Toast } from 'utils/flashMessages';

function Home({ isAddPost, setIsAddPost }) {
  const { data, isFetching, error } = useGetAllPostsQuery();
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    if (isAddPost) {
      ToastEmit('success', 'Post added successfully!');
      setTimeout(() => {
        setIsAddPost(false);
      }, 4000);
    }
  }, [isAddPost, setIsAddPost]);

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

  return (
    <div className='min-w-full flex flex-1 h-full'>
      {isAddPost && <Toast />}
      <PostList posts={posts} loading={isFetching} />
    </div>
  );
}

export default Home;
