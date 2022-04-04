import React, { useEffect, useState } from 'react';
import ContentBlock from '../../Sub-Component/ContentBlock/ContentBlock';
import Loading from '../../Utilities/Loading/Loading';
import Title from '../../Utilities/Title/Title';
const title = {
    subtitle: 'Blog',
    heading : 'Learn from',
    subheading:'Blog Post'
}

const Blog = () => {

  const [contents,setContents] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://json.extendsclass.com/bin/126018e7189f")
      .then((res) => res.json())
      .then((data) => {
        setContents(data)
        setLoading(false)
      });
  },[])

  let Content = (
    <div className="row mt-4">
      {contents.map((content) => (
        <div className="col-md-4">
          <ContentBlock content={content} />
        </div>
      ))}
    </div>
  );

    return (
      <div className='container'>
        <Title title={title} />
        {
          loading ? <Loading/> : Content
        }
        
      </div>
    );
};

export default Blog;