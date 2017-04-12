import React from 'react';
import PropTypes from 'prop-types';

const Header = ({whatever1, whatever2}) => {
    // no lifecycle methods
    // no refs

    const methodName = (e) => {
        //
    }

    return (
        <nav className="header nav navbar-default">
            <div className="navbar-header">
                <a className="navbar-brand">ShortenLink</a>
            </div>
        </nav>
    );
};


// Header.defaultProps = {};
// Header.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default Header;