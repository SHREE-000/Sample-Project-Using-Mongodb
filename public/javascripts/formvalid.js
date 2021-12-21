function validateForm(){
    var valid = $("#userform").validate({
        rules:{
            name:{
                required: true,
                maxlength: 30,
                lettersonly: true,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            email:{
                required: true,
                email: true,
                minlength: 5,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            password:{
                required: true,
                minlength: 8,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            confirmpassword: {
                required: true,
                minlength: 8,
                normalizer: function(value) {
                    return $.trim(value);
                },
                equalTo: "#exampleInputPassword"
            }
        }
    })
    return valid;
}


function validateEditUserForm(){
    var valid = $("#edituserform").validate({
        rules:{
            name:{
                required: true,
                maxlength: 30,
                lettersonly: true,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            email:{
                required: true,
                email: true,
                minlength: 5,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
        }
    })
    return valid;
}


jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z," "]+$/i.test(value);
}, "Only letters and spaces are allowed");


$(document).ready(function(){
    validateForm();
    validateEditUserForm()
})