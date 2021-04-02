import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'

const Image = ({ post }) => {
  console.log('post: ', post);

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

export async function getStaticPaths() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data } = await axios.get(url);
  const paths = data.map((item) => ({ params: { id: `${item.id}` } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
  const { data } = await axios(url);
  return {
    props: {
      post: data,
    },
  };
}
