import "./styles.css";

export const PostCard = ({id, title, body, cover}) => (
    <div className="post"> 
      <img src='https://picsum.photos/id/1/500/300' alt={title} />
      <div className="post-content">
        <h2 >{title}</h2>
        <p>{body}</p>
      </div>
    </div>
);
