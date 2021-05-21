const config = {
    port: process.env.PORT || 5000,
    dbUrl: process.env.MONGODB_URI || 'mongodb+srv://SKK:HppL2fJmByCG3U7q@cluster0.o5xrs.mongodb.net/ataDB?retryWrites=true&w=majority',
    cookie_name: 'x-auth-token',
    secret: 'nCnLp89tusFjqMEc6V8hXeMaKq3t3Y7Y',
    saltRounds: 12
};

export default config;