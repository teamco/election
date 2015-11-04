Template.editUserProfile.helpers({
    selectedCountry: function (country) {
        return getUserProfile().userCountry === country;
    }
});

function getCurrentUser() {
    return Accounts.users.findOne(Router.current().params.id) ||
        {profile: {}, status: {lastLogin: {}}};
}

function getUserProfile() {
    return (AccountProfile.findOne({userId: getCurrentUser()._id}) || {}).profile || {};
}