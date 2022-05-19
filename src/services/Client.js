import axios from "axios";

var path = "http://192.168.56.1:5000/"
var data = {}
var result = {}
export const ClientService ={
    getClients(){
        data['action']= 'get_user'
        axios.post(path,data).then((response) =>{
            var dato = response.data
            var items = dato.split(',')
            result['id'] = items[0]
            result['name'] = items[1]
            result['second_name'] = items[2]
            result['first_last_name']= items[3]
            result['second_last_name']= items[4]
            result['password']= items[5]
            result['mail'] = items[6]
            result["nit"] = items[7]
            result['rol'] = items[8]
            result['state'] = items[9]
            console.log('Data: '+JSON.stringify(result))
        })
        
        return result
    },
    async addClient(cedula,primerNombre,segundoNombre,primerApellido,segundoApellido,clave,email,nitEmpresa,rol,estado){
        
    },
    async updateClient(){

    },
    async deleteClient(){
        axios.post(path, data).then((response) => {

        })
    },
    
    
}