
export const GifItem = ({ title, id, url }) => {
    // console.log(url);
    return
    (<div className='card'>
        <img src={url} alt={title} />
        <p key={id}>{title}</p>
    </div>)
}