export const trimFirebaseErrorMessage = (errorMessage) => {
    const start = errorMessage.indexOf('(') + 1;
    const end = errorMessage.indexOf(')');
    if (start !== -1 && end !== -1) {
        const errorCode = errorMessage.substring(start, end).split('/')[1];
        return errorCode.replace(/-/g, ' ');
    }
    return errorMessage;
}