// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
	apiKey: "AIzaSyAiEZI6h_b0KqwyjGYRY6F_VmG2PTJsE54",
	authDomain: "seahere-ce8f4.firebaseapp.com",
	projectId: "seahere-ce8f4",
	storageBucket: "seahere-ce8f4.appspot.com",
	messagingSenderId: "342525093205",
	appId: "1:342525093205:web:f0d9ef75b6e7ba39dfbbdc",
	measurementId: "G-2J9VMQY4M5",
};

const app = initializeApp(firebaseConfig);

let messaging;
if (
	"Notification" in window &&
	"serviceWorker" in navigator &&
	"PushManager" in window
) {
	messaging = getMessaging(app);

	onMessage(messaging, (payload) => {
		console.log("Message received. ", payload);
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.ready.then((registration) => {
				registration.showNotification(payload.notification.title, {
					body: payload.notification.body,
					icon: payload.notification.icon,
					data: payload.data,
				});
			});
		}
	});
} else {
	console.warn("This browser does not support FCM or service workers.");
}

export { messaging, getToken, onMessage };
