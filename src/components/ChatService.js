import { DirectLine } from 'botframework-directlinejs';

class ChatService {
    directLine = new DirectLine({
        secret: 'gl39_6iRtvs.cwA.Sd0.peiqNaOyT7ckSkcPQrKHeApAIbQkP7-Eq_1tO8ZEMZ4'
    });

    constructor(callback) {
        this.directLine.activity$
            .subscribe(
                activity => callback(activity)
            );
    }

    sendMessage(message, callback) {
        this.directLine.postActivity({
            from: { id: 'user' },
            type: 'message',
            text: message || ''
        }).subscribe(
            id => console.log("Posted activity, assigned ID ", id),
            error => console.log("Error posting activity", error)
        );
    }
}

export default ChatService;