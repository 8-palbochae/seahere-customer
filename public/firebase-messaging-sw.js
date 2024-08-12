importScripts(
	"https://www.gstatic.com/firebasejs/10.12.4/firebase-app-compat.js"
);
importScripts(
	"https://www.gstatic.com/firebasejs/10.12.4/firebase-messaging-compat.js"
);

const firebaseConfig = {
	apiKey: "AIzaSyAiEZI6h_b0KqwyjGYRY6F_VmG2PTJsE54",
	authDomain: "seahere-ce8f4.firebaseapp.com",
	projectId: "seahere-ce8f4",
	storageBucket: "seahere-ce8f4.appspot.com",
	messagingSenderId: "342525093205",
	appId: "1:342525093205:web:f0d9ef75b6e7ba39dfbbdc",
	measurementId: "G-2J9VMQY4M5",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
	console.log(
		"[firebase-messaging-sw.js] Received background message ",
		payload
	);
	// Customize notification here
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: payload.notification.icon,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
