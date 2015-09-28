module.exports = {

    facebook: {
        clientID: '1615337032066573',
        clientSecret: 'c9d799104ab6cd8910e64b498e5c9ecf',
        authenticateUrl: '/auth/facebook',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'name', 'photos', 'email', 'gender']
    }
};