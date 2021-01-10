import AsyncStorage from '@react-native-community/async-storage';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'MobileFlashcards: notifications'

export function clearLocalNotification() {
    AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

const createNotification = () => {
    return {
       title: 'Time to Study!' ,
       body: '👋 Don\'t forget to learn something new today!',
       ios: {
        sound: true,
       }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if (data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({status}) => {
                if (status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()
                    let tomorrow =  new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(19)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(), {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    )
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}

