Template.editUserProfile.helpers({
    selectedCountry: function (country) {
        return getUserProfile().userCountry === country;
    }
});