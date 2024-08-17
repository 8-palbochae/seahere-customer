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
		data: payload.data,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
	event.notification.close();

	const notificationData = event.notification.data;

	if (notificationData) {
		event.waitUntil(
			clients
				.matchAll({ type: "window", includeUncontrolled: true })
				.then((windowClients) => {
					if (windowClients.length > 0) {
						windowClients[0].postMessage({
							type: "NOTIFICATION_CLICKED",
							data: notificationData,
						});
						return windowClients[0].focus();
					}

					return clients.openWindow("/").then((windowClient) => {
						if (windowClient) {
							windowClient.postMessage({
								type: "NOTIFICATION_CLICKED",
								data: notificationData,
							});
						}
					});
				})
		);
	}
});
