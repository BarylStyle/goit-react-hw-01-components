import { Component } from "react";
import PropTypes from "prop-types";
import "../Styles/profile.css";


export default class Profile extends Component {
    static defaultProps = {}


    static PropsType = {
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.shape({
            followers: PropTypes.number,
            viwes: PropTypes.number,
            likes: PropTypes.number,

        }),
    }
    render() {
        return (<div className="profile">
            <div className="description">
                <img
                    src={this.props.avatar}
                    alt="user avatar"
                    className="avatar"
                />
                <p className="name">{this.props.username}</p>
                <p className="tag">{this.props.tag}</p>
                <p className="location">{this.props.location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{this.props.stats.followers }</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{this.props.stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{this.props.stats.likes}</span>
                </li>
            </ul>
        </div>
        );
    }
}