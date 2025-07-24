import './Cards.css';

const Card = (
    {
        imgUrl,
        title,
        description,
        actionLabel,
        action = () => { }
    }
) => {
    return (
        <div className="card ">
            <div className='card-header'>
                <h1 className="">{title}</h1>
                <img src={imgUrl} alt={title} />
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className="card-footer">
                <button onClick={() => { action(); }}>{actionLabel}</button>
            </div>
        </div>
    );
}
export default Card;