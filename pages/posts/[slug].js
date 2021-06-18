import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import axios from "axios";


export const getStaticPaths  = async () => {
  const response = await axios.get(`http://localhost:1337/posts?_locale=all`);
  const posts = await response.data;

  const pathsEn = posts.map((post) => {
    return {
      params: { id: String(post.id), locale: "en"  },
    };
  });
  const pathsVn = posts.map((post) => {
    return {
      params: { id: String(post.id), locale: "vi"  },
    };
  });
  const paths = pathsEn.concat(pathsVn);


  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params, locale }) => {
  const { data } = await axios.get(`http://localhost:1337/posts/${params.id}?_locale=${locale}`);
  return {
    props: {
      data,
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

const PostDetailView = ({ data }) => {
  const { t } = useTranslation("common");

  const router = useRouter();

  return (
    <>
      <div>
        <button onClick={() => router.back()}>Back</button>
        <h1>{data.Title}</h1>
        <p>{data.published_at}</p>
        <div>{data.Content}</div>
      </div>
    </>
  );
};

export default PostDetailView;