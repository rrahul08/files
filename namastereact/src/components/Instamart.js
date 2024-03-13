import React, { useState } from 'react';

const Section = ({title,description,isVisible,setisVisible}) => {

  return (
    <div className='border border-black p-2 m-2'>
      <h3>{title}</h3>
      { isVisible? <button onClick={()=>setisVisible(false)}>Hide</button> :

      <button onClick={()=>setisVisible(true)}>Show</button>}
      {isVisible && <p>{description}</p>}
    </div>
  )
}

const Instamart = () => {

  const [visibleSection,setIsVisibleSEction] = useState("team");
  return (
    <div>
      <h1 className='text-3xl p-2 m-2 font-bold '>Instamart</h1>
      <Section 
      title={'About Instamart'}
      description={"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
      isVisible={visibleSection === "about"}
      setisVisible={()=>setIsVisibleSEction("about")}
      />
      <Section 
      title={'Team Instamart'}
      description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
      isVisible={visibleSection === "team"}
      setisVisible={()=>
        setIsVisibleSEction("team")}
      />
        {/* <Aboutinstamart />
        <Teaminstamart/>
        <Products/>
        <Carrers/> */}
    </div>
  )
}

export default Instamart;
