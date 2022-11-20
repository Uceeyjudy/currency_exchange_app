import ArticleWrappper from "./article.styles";
import right from "../assets/right.png";

const article = [
  {
    id: 1,
    title: "Introduction",
  },
  {
    id: 2,
    title: "Installation & Activation",
  },
  {
    id: 3,
    title: "Import & Export",
  },
  {
    id: 4,
    title: "Setting & Configuration",
  },
  {
    id: 5,
    title: "Setting & Configuration",
  },
  {
    id: 6,
    title: "How can I update",
  },
  {
    id: 7,
    title: "What is the basic structure",
  },
  {
    id: 8,
    title: "Terms and Conditions",
  },
  {
    id: 9,
    title: "One click installation",
  },
  {
    id: 10,
    title: "Update version installation",
  },
];

const Article = () => {
  return (
    <ArticleWrappper>
      <div className="article-container">
        <h1>Important Article</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </p>
      </div>
      <div className="article-card">
        {article.map(({id, title}) => (
          <div key={id} className="card-wrapper">
            <div className="card-intro">
              <img src={right} alt="" />
              <h1>{title}</h1>
            </div>
            <p>Article</p>
          </div>
        ))}
        
      </div>
    </ArticleWrappper>
  );
};

export default Article;
