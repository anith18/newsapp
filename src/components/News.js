// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {
//   constructor(){
//     super();
//     this.state={
//     articles: [],
//     loading:false,
//     page:1
//     }
//   }
//   async componentDidMount(){
                // https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}ead91fa8d0ee46d8a988d6cba394f490&page=1
//     let url="https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=1";
//     let data=await fetch(url);
//     let parsedData=await data.json();
//     this.setState({articles:parsedData.articles})
//   }

//   handlePrev=async ()=>{
//     console.log("clicked prev");
//     let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${this.State.page - 1}`;
//     let data=await fetch(url);
//     let parsedData=await data.json();
//     this.setState({
//       page:this.State.page - 1,
//       articles:parsedData.articles
//     })
//   }
//   handleNext=async ()=>{
//     console.log("next clicked");
//     let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${this.State.page + 1}`;
//     let data=await fetch(url);
//     let parsedData=await data.json();
//     this.setState({
//       page:this.State.page + 1,
//       articles:parsedData.articles
//   })
// }
//   render() {
//     return (
//       <div className='container my-3' >
//         <h1>News monkey top headlines</h1>
//         <div className='row '>
//           {this.state.articles.map((element)=>{
//             return  <div className='col-md-4' key={element.url}>
//             <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} newsUrl={element.url}
//             ImageUrl={element.urlToImage}/>    
//             </div>
            
//           })}
//         </div>
//         <div className='container d-flex justify-content-between'>
//         <button disabled={this.state.page<=1}type="button" onClick={this.handlePrev} className="btn btn-dark">&larr; Previous</button>
//         <button type="button" onClick={this.handleNext} className="btn btn-dark">Next 	&rarr;</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default News




// import React, { Component } from 'react';
// import NewsItem from './NewsItem';

// export class News extends Component {
//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1
      
//     };
//   }

//   async componentDidMount() {
//     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=1&pageSize=20`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({ articles: parsedData.articles ,totalResults:parsedData.totalResults});
//   }

//   handlePrev = async () => {
//     console.log('Clicked Prev');
//     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${this.state.page - 1}&pageSize=20`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       page: this.state.page - 1,
//       articles: parsedData.articles,
//     });
//   };

//   handleNext = async () => {
//     if(this.state.page + 1> Math.ceil(this.state.totalResults/20)){
      
//     }
//     else{
//     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${this.state.page + 1}&pageSize=20`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       page: this.state.page + 1,
//       articles: parsedData.articles
//     })
//   }
//   }

//   render() {
//     return (
//       <div className="container my-3">
//         <h1>News Monkey Top Headlines</h1>
//         <div className="row">
//           {this.state.articles.map((element) => {
//             return (
//               <div className="col-md-4" key={element.url}>
//                 <NewsItem
//                   title={element.title ? element.title : ''}
//                   description={element.description ? element.description : ''}
//                   newsUrl={element.url}
//                   ImageUrl={element.urlToImage}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             onClick={this.handlePrev}
//             className="btn btn-dark"
//           >
//             &larr; Previous
//           </button>
//           <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} onClick={this.handleNext} className="btn btn-dark">
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;



// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 6,
//     category: "general"
//   }
//   static propTypes={
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }

//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0, 
//     };
//   }
//   async updateNews(){
//     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({ articles: parsedData.articles,
//        totalResults: parsedData.totalResults,
//        loading: false });
//   }
//   async componentDidMount(props) {
//     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=1&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({ articles: parsedData.articles,
//        totalResults: parsedData.totalResults,
//        loading: false });
//   }

//   handlePrev = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//     // this.setState({loading:true});
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: parsedData.articles,
//     //   loading: false
//     // });
//     this.setState({
//       page:this.state.page-1
//     });
//     this.updateNews();
//   }

//   handleNext = async () => {
//     // if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     //   this.setState({loading:true});
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();
//     //   this.setState({
//     //     page: this.state.page + 1,
//     //     articles: parsedData.articles,
//     //     loading: false
//     //   });
//     this.setState({
//       page:this.state.page+1
//     });
//     this.updateNews();
//   }
//   render() {
//     return (
//       <div className="container my-3">
//         <h1 className='text-center' style={{margin:'35px 0px'}}>News Monkey Top Headlines</h1>
//         {this.state.loading && <Spinner/>}
//         <div className="row">
//         {!this.state.loading && this.state.articles?.length > 0 && this.state.articles.map((element) => {
//             return (
//               <div className="col-md-4" key={element.url}>
//                 <NewsItem
//                   title={element.title ? element.title : ''}
//                   description={element.description ? element.description : ''}
//                   newsUrl={element.url}
//                   ImageUrl={element.urlToImage}
//                   author={element.author}
//                   date={element.publishedAt}
//                   source={element.source.name}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <div className="container d-flex justify-content-between">
          // <button
//             disabled={this.state.page <= 1}
//             type="button"
//             onClick={this.handlePrev}
//             className="btn btn-dark"
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
//             type="button"
//             onClick={this.handleNext}
//             className="btn btn-dark"
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;



// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 6,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//   capitalizeFirstLetter=(string) =>{
//     return String(string).charAt(0).toUpperCase() + String(string).slice(1);
// }

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0,
//     }
//     document.title=`${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
//   }

//   async updateNews() {
//     const { country, category, pageSize } = this.props;
//     const { page } = this.state;

//     this.setState({ loading: true });
//     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${page}&pageSize=${pageSize}`;
//     const data = await fetch(url);
//     const parsedData = await data.json();

//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   }

//   componentDidMount() {
//     this.updateNews();
//   }

//   handlePrev = async () => {
//     this.setState(
//       (prevState) => ({ page: prevState.page - 1 }),
//       this.updateNews
//     );
//   };

//   handleNext = async () => {
//     this.setState(
//       (prevState) => ({ page: prevState.page + 1 }),
//       this.updateNews
//     );
//   };
//   fetchMoreData = async() => {
//    this.setState({page:this.state.page+1})
//    const { country, category, pageSize } = this.props;
//     const { page } = this.state;

//     this.setState({ loading: true });
//     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${page}&pageSize=${pageSize}`;
//     const data = await fetch(url);
//     const parsedData = await data.json();

//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   };

//   render() {
//     const { articles, loading, page, totalResults } = this.state;
//     const { pageSize } = this.props;

//     return (
//       <>
//         <h1 className="text-center" style={{ margin: '35px 0px' }}>
//           NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
//         </h1>
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length!==this.state.totalResults}
//           loader={<Spinner/>}
//         >
//         {loading && <Spinner />}
//         <div className='container'>
//         <div className="row">
//           {
//             articles.map((element) => (
//               <div className="col-md-4" key={element.url}>
//                 <NewsItem
//                   title={element.title || ''}
//                   description={element.description || ''}
//                   newsUrl={element.url}
//                   ImageUrl={element.urlToImage}
//                   author={element.author}
//                   date={element.publishedAt}
//                   source={element.source.name}
//                 />
//               </div>
//             ))}
//         </div>
//         </div>
//         </InfiniteScroll>
        
//       </>
//     );
//   }
// }

// export default News;


// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 6,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalizeFirstLetter = (string) => {
//     return String(string).charAt(0).toUpperCase() + String(string).slice(1);
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [], // Ensure articles is initialized as an empty array
//       loading: false,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
//   }

//   async updateNews() {
//     const { country, category, pageSize } = this.props;
//     const { page } = this.state;

//     this.setState({ loading: true });
//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${page}&pageSize=${pageSize}`;
//     const data = await fetch(url);
//     this.props.setProgress(30);

//     const parsedData = await data.json();
//     this.props.setProgress(70);

//     this.setState({
//       articles: parsedData.articles || [], // Default to empty array if undefined
//       totalResults: parsedData.totalResults || 0,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

//   componentDidMount() {
//     this.updateNews();
//   }

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     const { country, category, pageSize } = this.props;

//     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}}&apiKey=${props.apiKey}1ab20657aeb0463eba7e1b78e8d2f6f8&page=${this.state.page}&pageSize=${pageSize}`;
//     const data = await fetch(url);
//     const parsedData = await data.json();

//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles || []), // Default to empty array if undefined
//       totalResults: parsedData.totalResults || 0,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center" style={{ margin: '35px 0px' }}>
//           NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
//         </h1>
//         <InfiniteScroll
//           dataLength={this.state.articles?.length || 0} // Ensure dataLength is a number
//           next={this.fetchMoreData}
//           hasMore={this.state.articles?.length < this.state.totalResults} // Compare valid lengths
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles?.map((element) => (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title || ''}
//                     description={element.description || ''}
//                     newsUrl={element.url}
//                     ImageUrl={element.urlToImage}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </>
//     );
//   }
// }

// export default News;




// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//   }

//   async updateNews() {
//     const { country, category, pageSize } = this.props;
//     const { page } = this.state;

//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}}&apiKey=${props.apiKey}YOUR_API_KEY&page=${page}&pageSize=${pageSize}`;
//     const data = await fetch(url);
//     this.props.setProgress(30);

//     const parsedData = await data.json();
//     this.props.setProgress(70);

//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100);
//   }

//   componentDidMount() {
//     this.updateNews();
//   }

//   fetchMoreData = async () => {
//     const { country, category, pageSize } = this.props;

//     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}}&apiKey=${props.apiKey}YOUR_API_KEY&page=${this.state.page + 1}&pageSize=${pageSize}`;
//     const data = await fetch(url);
//     const parsedData = await data.json();

//     this.setState({
//       page: this.state.page + 1,
//       articles: this.state.articles.concat(parsedData.articles),
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center" style={{ margin: '35px 0px' }}>
//           NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
//         </h1>
//         {this.state.loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={this.state.articles?.length || 0}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles?.length < this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles?.map((element) => (
//                 <div className="col-md-4" key={element.url}>
//                   <NewsItem
//                     title={element.title || "Untitled"}
//                     description={element.description || "No description available"}
//                     newsUrl={element.url}
//                     ImageUrl={element.urlToImage}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </>
//     );
//   }
  
// }

// export default News;




import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News