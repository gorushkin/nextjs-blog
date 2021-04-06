import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import useSWR from 'swr';

const fetcher = async (...url) => {
  const { data } = await axios(...url);
  return data
};

const Image = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, error } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher)

  if (!post) {
    return <h1>Title</h1>;
  }

  return (
    <Layout title={post.title}>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <p>{post.body}</p>
      </article>
    </Layout>
  );
};

export default Image;

// export async function getStaticPaths() {
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const { data } = await axios.get(url);
//   const paths = data.map((item) => ({ params: { id: `${item.id}` } }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
//   const { data } = await axios(url);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }
