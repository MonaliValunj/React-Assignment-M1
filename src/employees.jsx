

 //Working with JSX syntax
    let sally = 'Sally Smith'
    let mark = 'Mark Martin'
    let holly = 'Holly Unlikely'
    let mona = 'Mona valunj'
    let Joe = 'Joe Jible'
    let aaron = 'Arron valunj'
    const element = (
        <ul style={{'color':'blue', 'fontSize': '24px'}}>
            <li>{sally}</li>
            <li>{mark}</li>
            <li>{holly}</li>
            <li>{mona.toUpperCase()}</li>
            <li>{Joe.toUpperCase()}</li>
            <li>{aaron}</li>
        </ul>
    )
    ReactDOM.render(element, document.getElementById('content'))


