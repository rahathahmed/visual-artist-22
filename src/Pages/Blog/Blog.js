import React from 'react';
import ContentBlock from '../../Sub-Component/ContentBlock/ContentBlock';
import Title from '../../Utilities/Title/Title';
const title = {
    subtitle: 'Blog',
    heading : 'Learn from',
    subheading:'Blog Post'
}
const Contents = [
  {
    id: new Date().getTime(),
    title: "Bangladesh has more learn people",
    thumb:
      "https://www.politico.eu/cdn-cgi/image/width=1200,height=675,fit=crop,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/02/27/GettyImages-1238118302-scaled.jpg",
    author: "Alina",
    authorPhoto:
      "https://i0.wp.com/www.zooinfotech.com/wp-content/uploads/2020/01/khaled.jpg?resize=598%2C371&ssl=1",
    published: "20 Dec 2020",
    dsc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, eum excepturi veritatis fugit illum iste perferendis, voluptatibus pariatur explicabo fugiat vero repellat voluptates atque nihil? Optio aliquam in sapiente?",
  },
  {
    id: new Date().getTime(),
    title: "Russian president Putin said Ucraine war 2020",
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTol80mDFuEOT9ZmSwxnPxneC39HLQ4sAoVuA&usqp=CAU",
    author: "Alina",
    authorPhoto:
      "https://i0.wp.com/www.zooinfotech.com/wp-content/uploads/2020/01/khaled.jpg?resize=598%2C371&ssl=1",

    published: "20 Dec 2020",
    dsc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, eum excepturi veritatis fugit illum iste perferendis, voluptatibus pariatur explicabo fugiat vero repellat voluptates atque nihil? Optio aliquam in sapiente?",
  },
  {
    id: new Date().getTime(),
    title: "Shakib Beats 20 Year has cricket carrier",
    thumb:
      "https://c.ndtvimg.com/2019-10/kbn7tvqg_shakib-al-hasan_625x300_21_October_19.jpg",
    author: "Alina",
    authorPhoto:
      "https://i0.wp.com/www.zooinfotech.com/wp-content/uploads/2020/01/khaled.jpg?resize=598%2C371&ssl=1",
    published: "20 Dec 2020",
    dsc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, eum excepturi veritatis fugit illum iste perferendis, voluptatibus pariatur explicabo fugiat vero repellat voluptates atque nihil? Optio aliquam in sapiente?",
  },
  {
    id: new Date().getTime(),
    title: "Russian president Putin said Ucraine war 2020",
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTol80mDFuEOT9ZmSwxnPxneC39HLQ4sAoVuA&usqp=CAU",
    author: "Alina",
    authorPhoto:
      "https://i0.wp.com/www.zooinfotech.com/wp-content/uploads/2020/01/khaled.jpg?resize=598%2C371&ssl=1",

    published: "20 Dec 2020",
    dsc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, eum excepturi veritatis fugit illum iste perferendis, voluptatibus pariatur explicabo fugiat vero repellat voluptates atque nihil? Optio aliquam in sapiente?",
  },
  {
    id: new Date().getTime(),
    title: "Bangladesh has more learn people",
    thumb:
      "https://i0.wp.com/theverybesttop10.com/wp-content/uploads/2017/12/The-Top-10-Heaviest-Living-Fish-From-Around-the-World.jpg?fit=600%2C400&ssl=1",
    author: "Alina",
    authorPhoto:
      "https://i0.wp.com/www.zooinfotech.com/wp-content/uploads/2020/01/khaled.jpg?resize=598%2C371&ssl=1",
    published: "20 Dec 2020",
    dsc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, eum excepturi veritatis fugit illum iste perferendis, voluptatibus pariatur explicabo fugiat vero repellat voluptates atque nihil? Optio aliquam in sapiente?",
  },
  {
    id: new Date().getTime(),
    title: "Russian president Putin said Ucraine war 2020",
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTol80mDFuEOT9ZmSwxnPxneC39HLQ4sAoVuA&usqp=CAU",
    author: "Alina",
    authorPhoto:
      "https://i0.wp.com/www.zooinfotech.com/wp-content/uploads/2020/01/khaled.jpg?resize=598%2C371&ssl=1",

    published: "20 Dec 2020",
    dsc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque, eum excepturi veritatis fugit illum iste perferendis, voluptatibus pariatur explicabo fugiat vero repellat voluptates atque nihil? Optio aliquam in sapiente?",
  },
];
const Blog = () => {
    return (
      <div className='container'>
        <Title title={title} />
        <div className="row mt-4">
          {Contents.map((content) => (
            <div className="col-md-4">
              <ContentBlock content={content} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Blog;