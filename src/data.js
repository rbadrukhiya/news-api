import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
// import Header from "./header"
// const [search , setsearch] = useState('https://newsapi.org/v2/everything?q=tesla&from=2022-12-10&sortBy=publishedAt&apiKey=a51218f173f74b7581df3c62860b9981')
//   function home(e)
//   {
//       if(e != '')
//       {
//         setsearch(`https://newsapi.org/v2/top-headlines?country=in&category=${e}&apiKey=a51218f173f74b7581df3c62860b9981`)
//       }
//   }



function Data() {
    const [data, setdata] = useState([])
    const { category } = useParams()
    console.log(category)
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=a51218f173f74b7581df3c62860b9981`)
            .then(function (response) {
                console.log(response);
                setdata(response.data.articles)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
            {/* <Header/> */}
            <nav className='header'>
        <div className="container pt-3">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="logo"><img src={require('./img/news.png')}/></div>
            </div>
            <div className="col-auto">
              <ul className='main-menu d-flex list-unstyled'>
                <li className="me-3"><a href='/'>Home</a></li>
                <li className='me-3'><a href={`/data/business`}>Business</a></li>
                <li className='me-3'><a href={`/data/entertainment`}>Entertainment</a></li>
                <li className='me-3'><a href={`/data/general`}>General</a></li>
                <li className='me-3'><a href={`/data/health`}>Health</a></li>
                <li className='me-3'><a href={`/data/science`}>Science</a></li>
                <li className='me-3'><a href={`/data/sports`}>Sports</a></li>
                <li className='me-3'><a href={`/data/technology`}>Technology</a></li>
              </ul>
            </div>
            <div className="col-auto">
              <ul className="d-flex list-unstyled">
                <li><i class="fa-brands fa-facebook me-3 social-icon"></i></li>
                <li><i class="fa-brands fa-linkedin me-3 social-icon"></i></li>
                <li><i class="fa-brands fa-youtube me-3 social-icon"></i></li>
                <li><i class="fa-brands fa-instagram me-3 social-icon"></i></li>
              </ul>
              {/* <input type="text" placeholder='search' onChange={(i) => home(i.target.value)} /> */}
            </div>
          </div>
        </div>
      </nav>
        <marquee behavior="scroll" direction="left" loop scrollamount='20' bgcolor='blue' color='white'>કતારની સત્તાવાર ન્યૂઝ એજન્સીએ અહેવાલ આપ્યો છે કે, કતારએ સોમવારે પૂર સંકટમાં પાકિસ્તાનને મદદ કરવા માટે $25 મિલિયન આપવાની જાહેરાત કરી હતી. આ ડોલની જાહેરાત કતારના વિદેશ રાજ્ય મંત્રી સુલતાન બિન સાદ અલ-મુરૈખી દ્વારા જીનીવામાં આયોજિત આબોહવા સ્થિતિસ્થાપક પાકિસ્તાન પરની આંતરરાષ્ટ્રીય પરિષદમાં કરવામાં આવી હતી.</marquee>

            {/* <h1>helo</h1> */}
            <div className="container">
                <div className="row justify-content-between row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-3">
                    {
                        data.map((i) => {
                            return (
                                <>
                                    <div className="col-auto "data-aos="zoom-in">
                                        <div className="box">
                                            
                                            
                                            <div className="news-image ">
                                                <img src={i.urlToImage} alt="something wrong" />
                                            </div>
                                            <div className="author-name mt-3">
                                                <h5>{i.author}</h5>
                                            </div>
                                            

                                            <div className="descr">
                                                <p>{i.description}</p>
                                            </div>
                                            {/* <div className="like">
                                            
                                        </div>
                                        <div className="url">
                                        </div> */}
                                            <div className="url mt-3">
                                                <div className="container">
                                                    <div className="row justify-content-between">
                                                        <div className="col-auto">
                                                            <div className="icon">

                                                                <ul className="d-flex list-unstyled">
                                                                    <li><i class="fa-regular fa-heart me-3"></i></li>
                                                                    <li><i class="fa-solid fa-share"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="read">
                                                                <button>
                                                                <p><a href={i.url} target='blank'>read</a></p>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="publish">
                                                <p>Published on {i.publishedAt}</p>
                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
export default Data