import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Meteor} from 'meteor/meteor';
// import {createContainer} from 'meteor/react-meteor-data';

// import LinkCreate from './LinkCreate.jsx';
// import {LinkCreate} from './LinkCreate.jsx';
export class LinkCreate extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            error:''
        }
       this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        Meteor.call(
            'links.insert',
            this.refs.input.value,
            (err, res) => {
                if (err) {
                    this.setState({error: 'Enter a valid URL'});
                } else {
                    this.setState({error:''});
                    this.refs.input.value='';
                }
            }
        );
    }

    render() {
        return (
            <form   className="link-create"
                    onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input  className="form-control"
                            ref="input"/>
                </div>
                <div className="text-danger">{this.state.error}</div>
                <button className="btn btn-primary">
                    Shorten
                </button>
            </form>
        );
    }
}

// LinkCreate.defaultProps = {};
// LinkCreate.propTypes = {
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

// export default createContainer(
//     () => {
//         return { meteorCall: Meteor.call }
//     },
//     LinkCreate
// );

export default LinkCreate;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')