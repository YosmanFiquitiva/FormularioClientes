const controller = {};

controller.list = (req , res) =>{
    req.getConnection((err , conn) => {
        conn.query('SELECT * FROM cliente', (err , clientes) => {
            
            if(err){
                res.json(err);
            }
            console.log(clientes);
            res.render('clientes',{
                data: clientes
            });

        })
    })
}

controller.save = (req , res) =>{
    const data = req.body
    req.getConnection((err , conn) =>{
        conn.query('INSERT INTO cliente SET ?',[data],(err , cliente) =>{
            console.log(cliente);
            res.redirect('/');
        })
    })
}

module.exports = controller;