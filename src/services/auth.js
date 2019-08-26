import * as AppAuth from 'expo-app-auth';

const config = {
    issuer:'https://accounts.google.com',
    clientId:'287871499475-9409sb8rs2tfpc0bv2839ufmpgumfdcu.apps.googleusercontent.com',
    scopes:['profile','email']
}

export const getAccessToken = async () => {
    const tokenResponse = await AppAuth.authAsync(config);
    console.log("token response",tokenResponse)
    return tokenResponse;
}
