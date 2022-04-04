import React from 'react';
import './Content.Block.css'
const ContentBlock = ({content}) => {
    const {title,dsc,thumb,author,authorPhoto,published,id} = content;
    return (
      <div>
        <div class="card content  border-0 mb-4">
          <h5>{title}</h5>
          <img
            src={thumb}
            className="card-img-top mt-2"
            style={{ height: "200px" }}
            alt=""
            srcset=""
          />

          <div className="author-info d-flex  align-item-center mt-2">
            <img
              src={authorPhoto}
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              alt=""
              srcset=""
            />
            <span>{author} </span>

            <span>{published}</span>
            <a href="a">Read more...</a>
          </div>
        </div>
      </div>
    );
};

export default ContentBlock;