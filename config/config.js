const config = {
    development: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb+srv://SKK:HppL2fJmByCG3U7q@cluster0.o5xrs.mongodb.net/ataDB?retryWrites=true&w=majority',
        cookie_name: 'x-auth-token',
        secret: 'nCnLp89tusFjqMEc6V8hXeMaKq3t3Y7Y',
        saltRounds: 12
    },
    production: {}
};

export default config[process.env.NODE_ENV.trim()];