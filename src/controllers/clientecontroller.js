const controller = {};

controller.list = (req , res) =>{
    req.getConnection((err , conn) => {
        conn.query('SELECT * FROM cliente', (err , clientes) => {
            
            if(err){
                res.json(err);
            }
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
            res.redirect('/');
        })
    })
}

controller.edit = (req , res) =>{
    const id = req.params.id;
    req.getConnection((err , conn) =>{
        conn.query('SELECT * FROM cliente WHERE id_cliente=?',[id],(err , cliente) =>{            
            res.render('clientesEdit',{
                data: cliente[0]
            });
        })
    })
}

controller.update = (req , res) =>{
    const id = req.params.id;
    const newData = req.body; 
    console.log(req.params.id)
    req.getConnection((err , conn) =>{
        conn.query('UPDATE cliente SET ? WHERE id_cliente=?',[newData, id],(err , cliente) =>{
            if(err){
                res.json(err);
            }
            res.redirect('/');
        })
    })
}

controller.delete = (req , res) =>{

    const id = req.params.id;
    req.getConnection((err , conn) =>{
        conn.query('DELETE FROM cliente WHERE id_cliente=?',[id],(err , cliente) =>{
            console.log(cliente);
            res.redirect('/');
        })
    })
}

module.exports = controller;