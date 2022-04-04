import CourceBlock from '../../Sub-Component/CourceBlock/CourceBlock';
import Title from '../../Utilities/Title/Title';
import './Courses.style.css'
import { useEffect, useState } from 'react';
import Loading from '../../Utilities/Loading/Loading';
import { Link } from 'react-router-dom';

const title = {
  subtitle: "Couser",
  heading: "Learn from",
  subheading: "Our Online Cources",
};
const Course = () => {
   const [cources,setCources] = useState([]);
   const [loading,setLoading] = useState(true);

   useEffect(()=>{
     fetch("https://json.extendsclass.com/bin/7eddde40f121")
       .then((res) => res.json())
       .then((data) => {
         setCources(data)
         setLoading(false)
       });
   },[])

   const Content = (
     <div className="container">
       <Title title={title} />
       <div className="text-center mt-4">
         <div className="cources-wrapper ">
           <div className="row mt-3 g-3">
             {cources.map((cource) => (
               <div className="col-md-4 mt-2">
                 <CourceBlock cource={cource} />
               </div>
             ))}
           </div>
           <button className="primary-btn" to="/allproducts">
             {" "}
             <Link to='/cources'> View All Cource </Link>
           </button>
         </div>
       </div>
     </div>
   );

    return (
       loading ? <Loading/> : Content
    );
};

export default Course;