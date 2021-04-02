import Layout, { siteTitle } from '../components/layout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const Test = ({ list: serverList }) => {
  const [list, setList] = useState(serverList);
  // console.log('list: ', list);
  // const router = useRouter()

  // useEffect(async () => {
  //   const url = 'https://jsonplaceholder.typicode.com/photos';
  //   const { data } = await axios.get(url);
  //   setList(data.splice(0, 5));
  // }, []);

  const clickHandler = (item) => {
    router.push(`images/${item.id}`);
  };

  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {list.map((item) => {
            return (
              <li className={utilStyles.listItem} key={item.id}>
                <Link href={`/jsonPosts/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
                <br />
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data } = await axios.get(url);
  return {
    props: {
      list: data,
    },
  };
}

export default Test;
