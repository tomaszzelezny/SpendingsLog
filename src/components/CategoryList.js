import React from 'react'

const DUMMY_DATA = [{
    id: 'wyzywienie',
    text: 'wyzywienie'
},
{
    id: 'transport',
    text: 'transport'
}]
class CategoryList extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (<select>
            {
                DUMMY_DATA.map((message, index) => {
                    return (
                        <option value="{message.id}">{message.text}</option>
                    )
                }
                )
            }
        </select>);
    }
}

export default CategoryList