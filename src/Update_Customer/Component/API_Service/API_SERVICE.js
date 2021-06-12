export default class API_SERVICE {

    
    // Note 'method': 'PUT',
    static updateforCustomer(id, body) {
        return fetch(`http://127.0.0.1:8000/api/Consumer/${id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d518d5a876b5d03df917bd6e9015d387ef62a37d'
            }, 
            body: JSON.stringify(body)
        }).then(resp => resp.json())
            .catch(Error => console.log(Error,"update"))
    }

    static Insert_data(body) {
        return fetch('http://127.0.0.1:8000/api/Consumer/', {
            // 'method': 'PATCH',
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d518d5a876b5d03df917bd6e9015d387ef62a37d'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
            .catch(Error => console.log(Error, "INSERT"))
    }

    static Delete_data(id) {
        return fetch(`http://127.0.0.1:8000/api/Consumer/${id}`, {
            // 'method': 'PATCH',
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d518d5a876b5d03df917bd6e9015d387ef62a37d'
            }
           
        })
    }

}
