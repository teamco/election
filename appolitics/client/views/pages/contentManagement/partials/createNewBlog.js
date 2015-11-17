
Template.createNewBlog.helpers({

});

Template.createNewBlog.events({
    //add your events here
});

Template.createNewBlog.onCreated(function () {
    //add your statement here
});

Template.createNewBlog.onRendered(function () {
    $('.selector').froalaEditor('toolbar.showInline', null, true);
});

Template.createNewBlog.onDestroyed(function () {
    //add your statement here
});

Template.createNewBlog.rendered = function(){

    // Initialize steps plugin
    $("#wizard").steps();

    $("#form").steps({
        bodyTag: "fieldset",
        onStepChanging: function (event, currentIndex, newIndex)
        {
            // Always allow going backward even if the current step contains invalid fields!
            if (currentIndex > newIndex)
            {
                return true;
            }

        },
        onStepChanged: function (event, currentIndex, priorIndex)
        {

        },
        onFinishing: function (event, currentIndex)
        {
            var form = $(this);

            // Disable validation on fields that are disabled.
            // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
            form.validate().settings.ignore = ":disabled";

            // Start validation; Prevent form submission if false
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            var form = $(this);

            // Submit form input
            form.submit();
        }
    });/*.validate({
     errorPlacement: function (error, element)
     {
     element.before(error);
     },
     rules: {
     confirm: {
     equalTo: "#password"
     }
     }
     });*/
};
