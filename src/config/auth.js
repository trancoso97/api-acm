const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const mysql = require('../database/mysql').pool

module.exports = function(passport){

    passport.use(new localStrategy({usernameField: usuario}, (usuario, senha ,done) => {
        
        mysql.getConnection((error, conn) => {
            if (error) { 
                console.log('Erro ao conectar ao MySQL!')
             }
            conn.query(
                'SELECT usuario, senha FROM USUARIOS WHERE usuario = ?', [usuario],
                (error, result, fields) => {
                    if (error) { 
                        return done(null, false, {message: 'Dados Inválidos!'})
                     }
                    else{
                        bcrypt.compare(senha, result.senha, (erro, batem) => {
                            if(batem){
                                return done(null, user)
                            }else{
                                return done(null, false, {message: 'Dados Inválidos!'})
                            }
                        })
                    }
                }
            )
        })

    }))

    passport.serializeUser((usuario, done) => {

        done(null, usuario.id)

    })

    passport.dese

}