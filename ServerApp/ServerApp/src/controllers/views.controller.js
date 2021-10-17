const db = require('../connection_db/db')

class ViewsController
{
    /*
    * Получение заказов для менеджерского приложения
    */
   //метод получился сложным позже ИЗМЕНИТЬ 
    async getOrders(req, res){
        const argument = req.params.id;
        console.log("Requested method GET 'Orders' " + argument);
        const all_orders = await db.query('SELECT * FROM all_orders');
        if(argument === "all"){
            res.json(all_orders.rows);        
        }
        else{
            let result_orders = new Array();
            all_orders.rows.forEach(row => {
                //новые 
                if(row['id_sotr'] === null && argument === "new"){
                    result_orders.push(row);
                }
                //выполняющиеся
                if(row['id_sotr'] !== null && argument === "running"){
                    result_orders.push(row);
                }
                //выполненные
                if(row['status'] === true && argument === "complited"){
                    result_orders.push(row);
                }
            });
            res.json(result_orders);
        }

    }
    async getClientOrders(req, res){
        const id = req.params.id;
        console.log("Requested method GET 'ClientOrders' id_client = " + id);
        const client_orders = await db.query('SELECT * FROM client_orders');
        let result_orders = new Array();
        client_orders.rows.forEach(row=>{
            //использую знак == , так как 
            //row['id_client'] имеет тип integer
            //a переменная id - string
            if(row['id_client'] == id){
                result_orders.push(row);
            }
        });
        res.json(result_orders);
    }
    
}

//экспортируем объект этого контроллера
module.exports = new ViewsController()