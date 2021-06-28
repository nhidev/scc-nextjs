import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Image from "next/image";

const PostCardStyled = styled(Col)`
 img {
    border: 0;
    display: block;
    height: auto;
    max-width: 100%;
  }
  .post-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
    align-content: stretch;
    margin: 2rem;
  }
  .post-content--alt {
    margin-top: 10vw;
  }
  .post-content__img,
  .post-content__img img {
    width: 100%;
  }
  .post-content .text-wrapper {
    width: 80%;
    margin: 0;
  }

  .post-content__meta {
    margin-bottom: 1.5rem;
    margin-top: 3rem;
  }
  .post-content__cta {
    margin-top: 1.5625rem;
  }
`;

const PostCard = ({ title, image, publishedAt, onClick }) => {
  return (
    <PostCardStyled className="col" xs={12} sm={6}>
       <div className="post-content">
          <div className="post-content__img">
            <a href="https://parthianclimbing.com/harrogate/2020/05/29/the-power-of-knowledge-know-your-holds/">
              <Image src="https://parthianclimbing.com/harrogate/wp-content/uploads/sites/19/2020/05/39149561090_30a6c76485_o-e1590747648862.jpg" />
            </a>
          </div>
          <div className="text-wrapper">
            <div className="post-content__meta">
              <p className="">{new Date(publishedAt).toLocaleDateString()}</p>
            </div>
            <div className="post-content__content">
              <h4>{title}</h4>
            </div>

            <div className="post-content__cta">
              <button type="button" onClick={onClick}
                className="btn btn--black-keyline btn--large"
              ><span>Find out more</span>
                <i></i>
              </button>
            </div>
          </div>
        </div>
    </PostCardStyled>
  );
};

export default PostCard;