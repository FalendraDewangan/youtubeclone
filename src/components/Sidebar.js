import {React} from 'react'

const Sidebar = (props) => {
  const category = [
                      {"name":"New"}, 
                      {"name":"Trending"},
                      {"name":"Coding"},
                      {"name":"ReactJs"},
                      {"name":"Education"},
                      {"name":"Music"},
                      {"name":"Live"},
                      {"name":"Gaming"},
                      {"name":"Sports"},
                      {"name":"Movies"},
                      {"name":"Entertainment"},
                      {"name":"Fashion"},
                      {"name":"Shopping"},
                      {"name":"Podcast"},
                      {"name":"Beauty"}
                   ];

  const updateSelected = (element)=>
  {
      props.setSelectedCategory(element.name);
      // fetch data related to that category
  }
  return (
    <>
        <div className="sidebar">
          {category.map((element)=>{
            return <button style={{backgroundColor:props.selectedCategory===element.name?"#FC1503":""}} onClick={()=>{updateSelected(element)}} key={element.name}>
              <span style={{color:element.name===props.selectedCategory?"white":"red", marginRight:"10px"}}>{element.icon}</span>
              <span style={{opacity:element.name===props.selectedCategory?"1":"0.8"}}>{element.name}</span>
            </button>
          })}
        </div>
    </>
  )
}

export default Sidebar