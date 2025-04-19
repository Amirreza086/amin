export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validatePassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
};

export const validateName = (name) => {
    return name.length >= 2 && name.length <= 50;
};

export const validateMessage = (message) => {
    return message.length >= 10 && message.length <= 1000;
};

export const validateURL = (url) => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

export const validateForm = (formData, rules) => {
    const errors = {};
    
    Object.keys(rules).forEach(field => {
        const value = formData[field];
        const fieldRules = rules[field];
        
        if (fieldRules.required && !value) {
            errors[field] = 'این فیلد الزامی است';
        } else if (value) {
            if (fieldRules.minLength && value.length < fieldRules.minLength) {
                errors[field] = `حداقل ${fieldRules.minLength} کاراکتر وارد کنید`;
            }
            if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
                errors[field] = `حداکثر ${fieldRules.maxLength} کاراکتر مجاز است`;
            }
            if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
                errors[field] = fieldRules.message || 'مقدار وارد شده معتبر نیست';
            }
        }
    });
    
    return errors;
}; 