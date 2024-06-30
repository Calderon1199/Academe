export function formatPhoneNumber(value) {
    // Remove all non-numeric characters from the input value
    const numericValue = value.replace(/\D/g, '');

    // Format the phone number with parentheses and dash
    const formattedValue = numericValue.replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');

    return formattedValue;
}
