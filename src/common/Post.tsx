import { checkLengthText, randomDate } from "../utils/helper";
import { IPropsPost } from "../interfaces";
import { faker } from "@faker-js/faker";
import { ReactComponent as Avatar } from "../svg/Img.svg";

const Post = ({ post }: IPropsPost) => {
  return (
    <div className="block-post">
      <div className="block-post-header">
        <input type={"checkbox"} defaultChecked={post.completed} />
        <p>{checkLengthText(post.title)}</p>
      </div>
      <div className="block-post-main">
        <div className="block-post-main-time">
          <p>{randomDate()}</p>
          <p>{randomDate()}</p>
        </div>
        <p>{faker.commerce.productDescription()}</p>
      </div>
      <div className="block-post-footer">
        <div className="block-post-footer-main">
          <div className="block-first-tag">
            <p>{faker.person.firstName()}</p>
          </div>
          <div>
            <div className="block-second-tag">
              <p>{faker.person.firstName()}</p>
            </div>
            <div className="block-square" />
          </div>
        </div>
        <div className="block-post-footer-avatar">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Post;
