import { useState } from 'react'

function Header() {
  const [search , setsearch] = useState('https://newsapi.org/v2/everything?q=tesla&from=2022-12-10&sortBy=publishedAt&apiKey=a51218f173f74b7581df3c62860b9981')
  function home(e)
  {
      if(e != '')
      {
        setsearch(`https://newsapi.org/v2/top-headlines?country=in&category=${e}&apiKey=a51218f173f74b7581df3c62860b9981`)
      }
  }

  return (
    <>
      <nav className='header'>
        <div className="container ">
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
              {/* <ul className="d-flex list-unstyled">
                <li><i class="fa-brands fa-facebook me-3 social-icon"></i></li>
                <li><i class="fa-brands fa-linkedin me-3 social-icon"></i></li>
                <li><i class="fa-brands fa-youtube me-3 social-icon"></i></li>
                <li><i class="fa-brands fa-instagram me-3 social-icon"></i></li>
              </ul> */}
              <input type="text" placeholder='search' onChange={(i) => home(i.target.value)} />
            </div>
          </div>
        </div>
      </nav>
        <marquee behavior="scroll" direction="left" loop scrollamount='20' bgcolor='blue' color='white'>સમાચાર એ વર્તમાન ઘટનાઓ વિશેની માહિતી છે. આ ઘણાં વિવિધ માધ્યમો દ્વારા પ્રદાન કરવામાં આવી શકે છે: મૌખિક શબ્દ, પ્રિન્ટિંગ, પોસ્ટલ સિસ્ટમ્સ, પ્રસારણ, ઇલેક્ટ્રોનિક સંચાર અથવા ઘટનાઓના નિરીક્ષકો અને સાક્ષીઓની જુબાની દ્વારા. સમાચારને સોફ્ટ મીડિયાથી અલગ પાડવા માટે કેટલીકવાર તેને "હાર્ડ ન્યૂઝ" કહેવામાં આવે છે.</marquee>
    </>
  )

}
export default Header