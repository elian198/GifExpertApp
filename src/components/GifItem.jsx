
export const GifItem = ( {id, title, url} ) =>{

    return(
        <>
        <div className="card">
          <img src={url} title={title} alt={title}></img>
          <h3>{title}</h3>
        </div>
        </>
    )
}