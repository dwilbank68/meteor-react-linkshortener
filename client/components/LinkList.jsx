import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/links';
// import LinkList from './LinkList.jsx';
// import {LinkList} from './LinkList.jsx';
export class LinkList extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick(e) {
    //
    //    this.setState({
    //
    //    })
    // }
    renderRows(){
        return this.props.links.map((link) => {
            const {url, clicks, token} = link;
            const shortLink = `http://localhost:3000/${token}`;
            return (
                <tr key={token}>
                    <td>{url}</td>
                    <td><a href={shortLink}>{shortLink}</a></td>
                    <td>{clicks}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table link-list">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Address</th>
                        <th>Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

// LinkList.defaultProps = {};
// LinkList.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol


// -> this.props.loadCourses, this.props.createCourse

//
// -> this.props.actions.loadCourses();

///////////////////////////// context //////////////////////////////

// ManageCoursePage.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default createContainer(
    () => {
        Meteor.subscribe('links');
        return { links: Links.find({}).fetch() };
    },
    LinkList
);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')