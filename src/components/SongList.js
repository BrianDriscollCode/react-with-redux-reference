import React from 'react';
import { connect } from "react-redux"
import { selectSong } from "../Actions" 

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}> 
                    <div className="right floated content"> 
                        <button 
                            className='ui button primary'
                            onClick={() => this.props.selectSong(song)}
                        > 
                            Select
                        </button>
                    </div>

                    <div className='content'>
                        {song.title}
                    </div> 
                </div>
            );
        });
    }

    render() {
        //mapStateToProps maps the redux object into props.
        //Therefore, this.props === { songs: state.songs }

        return <div className="ui divided list"> {this.renderList()} </div>;
    }

}

//mapping to props of this component
const mapStateToProps = (state) => {
    return {songs: state.songs};

}

export default connect(mapStateToProps, { selectSong })(SongList);