/*权限验证中间件*/
var config = require('../config');

'use strict';

module.exports = {
    /**
     * 登陆权限验证
     */
    isAuthenticated: function (req, res, next) {
        if(typeof(req.session.user) != 'undefined') {
            return next();
        }else{
            //req.flash(config.constant.flash.error, '请先登录!');
            res.redirect('/login');
        }
    }
};