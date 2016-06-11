var Config = {
    site: {
        title: 'WincnDEV',
        description: '开源、分享，专注开发，用Coding创造财富',
        version: '2.0.1',
    },
    dbMysql: {
        password: '123456',
        user: 'root',
        host: 'localhost',
        port: '3306',
        database: 'chat'
    },
    constant: {
        flash: {
            success: 'success',
            error: 'error'
        },
        role: {
            admin: 'admin',
            user: 'user'
        }
    }
};
module.exports = Config;