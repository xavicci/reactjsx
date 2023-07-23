
export const GifItem = ({ title, id, url }) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p key={id}>{title}</p>
        </div>
    )
}