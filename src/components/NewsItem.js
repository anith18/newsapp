// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let {title,description,ImageUrl,newsUrl,author,date,source}=this.props;
//     return (
//       <div className='my-3'>
//         <div className="card " >
//           <div style={{
//             display:'flex',
//             position:'absolute',
//             justifyContent:'flex-end',
//             right:'0'
//           }

//           }>
//         <span className='badge rounded-pill bg-danger' >{source}</span>
//         </div>
//   <img src={ImageUrl?ImageUrl:"https://www.whitehouse.gov/wp-content/uploads/2021/01/wh_social-share.png"} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}  </h5>
//     <p className="card-text">{description}</p>
//     <p className='card-tex'><small calss="text-muted">By {!author?"Unkown":author}  on {new Date(date).toGMTString()}</small></p>
//     <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary ">Read More</a>
//   </div>
// </div>
//       </div>
//     )
//   }
// }

// export default NewsItem


// import React from 'react';

// const NewsItem = (props) => {
//   let { title, description, newsUrl, ImageUrl, author, date, source } = props;

//   return (
//     <div className="card">
//       <img src={ImageUrl} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <p className="card-text">
//           <small className="text-muted">
//             <strong>By:</strong> {author ? author : "Unknown"} 
//             <br />
//             <strong>Source:</strong> {source ? source : "No source"}
//             <br />
//             <strong>Published:</strong> {new Date(date).toLocaleString()}
//           </small>
//         </p>
//         <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;



// import React from 'react'

// const NewsItem = (props)=> {
//         let { title, description, imageUrl, newsUrl, author, date, source } = props;
//         return (
//             <div className="my-3">
//                 <div className="card">
//                     <div style={{
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                         position: 'absolute',
//                         right: '0'
//                     }
//                     }> 
//                         <span className="badge rounded-pill bg-danger"> {source} </span>
//                     </div>
//                     <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}  </h5>
//                         <p className="card-text">{description}</p>
//                         <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
//                         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
     
// }

// export default NewsItem

import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>

                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem