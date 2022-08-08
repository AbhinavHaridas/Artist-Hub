import React from "react";

const styleClout = {
    display: 'flex',
    justifyContent: 'space-around'
};

const Artist = ({ artist }) => {
    if (!artist) {
        return null;
    } 

    const { name, popularity, images, followers, genres } = artist;

    return (
        <div className="render">
            <h3>{name}</h3>
            <img src={images[0] && images[0].url} 
                style={{height: '200px', width: '200px', borderRadius: '100px'}}
                alt='image'
                className="image"
            />
            <div style={styleClout}>
                <h4># {popularity}</h4>
                <h4>{followers.total} followers</h4>
            </div>
            <h4 className="genres">{genres.join(', ')}</h4>
            <br/><h3>Top Tracks</h3>
        </div>
    )
}

export default Artist;