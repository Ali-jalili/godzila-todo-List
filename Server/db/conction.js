const { connect } = require('mongoose');

const connection = (uri) => {
    return connect(uri);
}


module.exports = connection