function Validator(formSelector, options) {
    if (!options) {
        options = {};
    }
    function getParent(element, selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.getParent;
        }
    }
    
    let formElement = document.querySelector(formSelector);
    let formRules = {};
    let varlidartorRules = {
        required: function(value) {
            return value ? undefined : `Vui lòng nhập đầy đủ thông tin!`;
        },
        email: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : `Vui lòng nhập lại Email!`;
        },
        phone: function(check) {
            return function(value) {
                return value.length >= check ? undefined : `Vui lòng nhập ít nhất ${check} ký tự!`;
            }
        },
        areaRequired: function(value) {
            return value ? undefined : `Hãy cho chúng tôi biết ý kiến của bạn!`;
        },
    };

    if (formElement) {
        let inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            let rules =  input.getAttribute('rules').split(',');
            for (var rule of rules) {

                let isRuleHasValue = rule.includes(':');
                let ruleInfo;
                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                let ruleFunc = varlidartorRules[rule];
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }
                
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                }
                else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            input.onblur = handleValidate;
            input.oninput = handleClearError;

        }
        function handleValidate(event) {
            let rules = formRules[event.target.name];
            let errorMessage;

            rules.find(function(rule){
                errorMessage = rule(event.target.value);
                return errorMessage;
            });

            if (errorMessage) {
                let formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    let formMessage = formGroup.querySelector('.form-message');
                    if(formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
            return !errorMessage;
        }
        function handleClearError(event) {
            let formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                let formMessage = formGroup.querySelector('.form-message');
                if(formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
        // When submit
        formElement.onsubmit = function (event) {
            event.preventDefault();
            let inputs = formElement.querySelectorAll('[name][rules]');
            let isValid = true;
            for (var input of inputs) {
                if(!handleValidate({target: input })) {
                    isValid = false;
                }
            }
            if (isValid) {
                if (typeof options.onSubmit === 'function') {
                    let enableInputs = formElement.querySelectorAll('[name]');
                    let formValues = Array.from(enableInputs).reduce(function(values, input) {
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name = "'+ input.name + '"');
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});
    
                    options.onSubmit(formValues);
                } else {
                    formElement.submit();
                }
            }
        }
    }
}


//Call
Validator ('#contact-form', {
    onSubmit: function(data) {
        console.log(data);
    },
});