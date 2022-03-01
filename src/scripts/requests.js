import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertedRequest).join("")
            }
        </ul>
    ` 
    return html
    }
    
    
    const convertedRequest = (request) => {
        let html = ""

        html += `<li>${request.discription}
        <button class="request__delete
        id="request--${request.id}
        Delete
        </button>
        </li>`
    

    return html
    }