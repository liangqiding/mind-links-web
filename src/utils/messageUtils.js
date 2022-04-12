/**
 * 消息提示工具类
 * lqd
 */
import {Message, MessageBox, Notification} from 'element-ui'

export default {
    /**
     * 消息确认框
     * type: success/warning/info/error
     */
    openConfirm: (msg, type, okCallback, errCallback) => {
        MessageBox.confirm(msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: type
        }).then(() => {
            // eslint-disable-next-line standard/no-callback-literal
            okCallback()
        }).catch(() => {
            // eslint-disable-next-line standard/no-callback-literal
            errCallback()
        })
    },
    /**
     * 消息弹窗
     * type: success/warning/info/error
     */
    message(msg, type, duration) {
        Message({
            message: msg,
            type: type || 'success',
            duration: duration || 1000
        })
    },
    /**
     * 消息通知框
     * type: success/warning/info/error
     */
    notice(msg, type, duration) {
        Notification(
            {
                title: '消息',
                message: msg,
                type: type || 'success',
                duration: duration || 2000
            }
        )
    }
}
