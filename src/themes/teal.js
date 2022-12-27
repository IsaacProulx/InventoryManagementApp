import './teal.css'
const theme = {
    name: 'test-theme',
    tokens:{
        components:{
            Table:{
                headerBorderColor:{ value: '{colors.teal[80]}' },
                dataBorderColor:{ value: '{colors.teal[80]}' },
                headerColor:{ value: '{colors.teal[20]}'}
            },
        }
    }
}

export default theme;