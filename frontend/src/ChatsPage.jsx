import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'd001b81f-7643-44ff-bb22-e90fbcaa6362',
        props.user.username,
        props.user.secret);
    return (
        <div style = {{height: '100 vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        </div>
    )
}

export default ChatsPage