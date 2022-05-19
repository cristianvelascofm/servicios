import axios from "axios";

var path = "http://192.168.130.79:5000/"
// var path = "http://192.168.56.1:5000/"
var data = {}
var result = {}
var ans = []
export const ClientService = {
    async getClients() {
        data['action'] = 'get_user'
        await axios.post(path, data).then((response) => {
            var dato = response.data
            for (var i = 0; i < dato.length; i++) {
                console.log(dato[i][0])

                result['id'] = dato[i][0]
                result['name'] = dato[i][1]
                result['second_name'] = dato[i][2]
                result['first_last_name'] = dato[i][3]
                result['second_last_name'] = dato[i][4]
                result['password'] = dato[i][5]
                result['mail'] = dato[i][6]
                result["nit"] = dato[i][7]
                result['rol'] = dato[i][8]
                result['state'] = dato[i][9]
                ans.push(result)
                console.log('ANSa **: ')
                console.log(ans)

            }

        })
        console.log('ANS: ')
        console.log(ans)
        return ans

    },
    async addClient(cedula, primerNombre, segundoNombre, primerApellido, segundoApellido, clave, email, nitEmpresa, rol, estado) {

    },
    async updateClient() {

    },
    async deleteClient() {
        axios.post(path, data).then((response) => {

        })
    },


}