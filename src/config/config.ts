const dbConfig = {
    user: "mevn",
    pwd: "mevn",
    db: "test"
};

const dbConnStr = () => {
    return 'mongodb+srv://'+dbConfig.user+':'+dbConfig.pwd+'@clustertest.f7muk.mongodb.net/'+dbConfig.db+'?retryWrites=true&w=majority'
};

const passGitHubConfig = {
    clientID: 'bbef195b19f536ce77b3',
    clientSecret: '367502a60235f4bbbdd64d6d610f955133edf7b4',
    callbackURL: 'http://localhost:3000/auth'
};

const expSessionSecret = 'any key will do'

export {dbConnStr, passGitHubConfig, expSessionSecret};
