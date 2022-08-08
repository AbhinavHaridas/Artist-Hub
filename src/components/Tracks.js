import React, { Component } from "react";

class Tracks extends Component {
    state = { 
        playing: false, 
        audio: null, 
        playingPreviewUrl: null 
    };

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);
        if (!this.state.playing) {
            audio.play();
            this.setState({playing : true, audio, playingPreviewUrl: previewUrl });
        } else {
            this.state.audio.pause();

            if (this.state.playingPreviewUrl === previewUrl) {
                this.setState({ playing: false });
            } else {
                audio.play();
                this.setState({ audio, playingPreviewUrl: previewUrl});
            }
        }
    }

    render() {
        const { tracks } = this.props;

        return (
            <div className="tracks" style={{marginTop: '30px'}}>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;
                        return (
                            <div key={id} onClick={this.playAudio(preview_url) } style={{ marginTop: '40px', position: 'relative', display: 'inline-block', marginLeft: '40px', cursor: 'pointer' }}>
                                <img src={album.images[0].url} alt='albumImage' className="song_image"/>
                                <h4 className="track-text">{name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;