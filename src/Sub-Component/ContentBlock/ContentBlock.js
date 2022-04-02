import React from 'react';
import './Content.Block.css'
const ContentBlock = ({content}) => {
    const {title,dsc,thumb,author,authorPhoto,published,id} = content;
    return (
      <div>
        <div class="card content border-0">
          <h5 >{title}</h5>
          <img src={thumb} className='card-img-top' alt="" srcset="" />

            <div className="author-info d-flex justify-content-between align-item-center mt-2">
              <span className='ml-4'>
                  <img src={authorPhoto} style={{width:'40px',height:'40px',borderRadius:'50%'}} alt="" srcset="" />{author}
              </span>
              <span>{published}</span>
              <a href="a"> Read more...</a>
            </div>
    
        </div>
      </div>
    );
};

export default ContentBlock;