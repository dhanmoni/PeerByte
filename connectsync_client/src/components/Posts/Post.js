import React, { useState, useEffect } from "react";
import "./PostStyles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPostByID, addLike, removeLike, deletePost } from "../../redux/action/posts";

const Post = (props) => {
  const {
    auth,
    postImg,
    text,
    comments,
    getPostByID,
    likes,
    _id,
    addLike,
    removeLike,
    deletePost,
    user,
    workplaces
  } = props;
  //initial heart class
  const [heart, setHeart] = useState("fa-heart-o");
  const [numLikes, setNumLikes] = useState(likes.length);
  const postId = _id;
  const ifPostImg = () => {
    if (postImg) {
      return (
        <img class="card-img-top card-img" src={postImg} alt="Card image cap" />
      );
    }
  };

  useEffect(() => {
    if (
      likes.filter((like) => like.user._id.toString() === auth.user._id)
        .length > 0
    ) {
      setHeart("fa-heart");
    }
  }, []);

  const like = (e) => {
    e.preventDefault();
    if (heart === "fa-heart-o") {
      setHeart("fa-heart");
      setNumLikes(numLikes + 1);
      addLike(_id, workplaces);
    } else {
      setHeart("fa-heart-o");
      removeLike(_id);
      setNumLikes(numLikes - 1);
    }
  };
  

  return (
    <div className="card mb-3">
      <div class="card-header d-flex align-items-center">
        <img className="rounded-circle profile-img" src={user.img} />
        <p className="p-2">{user.name}</p>
      { user._id === auth.user._id && (
            <span
            style={{marginLeft: "auto"}}
              className="delete bg-red"
              onClick={() => {
                let result = window.confirm(
                  "Do you want to delete this post?"
                );
                if (result) {
                  deletePost(_id);
                }
              }}
            >
              <i className="fa fa-trash"></i>
            </span>
          )}
      </div>
      {ifPostImg()}
      <div className="card-body">
        <p className="card-text ">{text}</p>
        <div className="d-flex align-items-center card-border ">
          <p>
            <i onMouseDown={like} className={`fa fa-2x ${heart} heart`}></i>
          </p>
          <p className="p-2">{numLikes} likes</p>
          <p className="p-2">
            <Link className="comment-link" to={`/posts/${postId}/comment`}>
              <i
                className="fa fa-comment-o fa-2x"
                onClick={() => {
                  getPostByID(postId);
                }}
              ></i>
            </Link>
          </p>
          <p  className="p-0">{comments.length} comment(s)</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getPostByID,
  addLike,
  removeLike,
  deletePost
})(Post);
