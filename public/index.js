"use strict";
const registerForm = document.querySelector("#register-form");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const registerButton = document.querySelector("#button-register");
const modalContainer = document.querySelector("#modal-container");
const modalButton = document.querySelector("#button-modal");
const pInvalidName = document.querySelector("#p-invalid-name");
const pInvalidEmail = document.querySelector("#p-invalid-email");
const pInvalidPassword = document.querySelector("#p-invalid-password");
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const isNameValid = validateName(inputName.value);
    const isEmailValid = validateEmail(inputEmail.value);
    const isPasswordValid = validatePassword(inputPassword.value);
    !isNameValid ? (pInvalidName.innerHTML = "* O nome deve conter apenas letras e ter no mínimo 4 caracteres") : (pInvalidName.innerHTML = "");
    !isEmailValid ? (pInvalidEmail.innerHTML = "* Email invalido") : (pInvalidEmail.innerHTML = "");
    !isPasswordValid
        ? (pInvalidPassword.innerHTML = "* A senha deve conter pelo menos uma letra e um número, e ter no mínimo 8 caracteres de comprimento.")
        : (pInvalidPassword.innerHTML = "");
    const hasError = !isNameValid || !isEmailValid || !isPasswordValid;
    if (hasError) {
        return;
    }
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
    modalContainer.classList.remove("hidden");
    modalContainer.classList.add("flex");
});
modalButton.addEventListener("click", function (e) {
    e.stopPropagation();
    closeModal();
});
modalContainer.addEventListener("click", function (e) {
    if (e.target === modalContainer) {
        closeModal();
    }
});
const validateName = (name) => {
    const trimmedName = name.replace(/\s+/g, "");
    if (trimmedName.length < 4) {
        return false;
    }
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    return nameRegex.test(name);
};
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const validatePassword = (password) => {
    if (password.length < 8) {
        return false;
    }
    const hasLetterRegex = /[A-Za-z]/;
    const hasNumberRegex = /[0-9]/;
    return hasLetterRegex.test(password) && hasNumberRegex.test(password);
};
const closeModal = () => {
    modalContainer.classList.add("hidden");
    modalContainer.classList.remove("flex");
};
