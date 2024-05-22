const form = document.querySelector('.feedback-form');
const formData = {
    email: '',
    message: ''
};

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
});

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const savedFormData = JSON.parse(savedData);
        formData.email = savedFormData.email || '';
        formData.message = savedFormData.message || '';
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});
