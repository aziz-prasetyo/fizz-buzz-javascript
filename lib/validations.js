export function isRequired(
    input,
    message = "Input required."
) {
    if (!input || /^\s+$/.test(input)) {
        throw new Error(message);
    }
}

export function isMainMenuOptionString(
    input,
    message = "Please enter a valid option with no leading or trailing spaces."
) {
    if (!/^[1-2]$/.test(input)) {
        throw new Error(message);
    }
}

export function isPositiveIntegerString(
    input,
    message = "Input must be a positive integer with no leading or trailing spaces."
) {
    if (!/^[0-9]\d*$/.test(input)) {
        throw new Error(message);
    }
}

export function isMoreThanZeroIntegerString(
    input,
    message = "Input must be a more than zero integer with no leading or trailing spaces."
) {
    if (!/^[1-9]\d*$/.test(input)) {
        throw new Error(message);
    }
}
