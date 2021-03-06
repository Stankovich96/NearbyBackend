import * as functions from 'firebase-functions';
import firebase from 'firebase';
import 'firebase/firestore';
import * as admin from 'firebase-admin';
// Your web app's Firebase configuration
const firebaseConfiguration = {
	apiKey: 'AIzaSyC5xPcn__asUk_VlN0sFwJBgQ1WYG9qe6Q',
	authDomain: 'hospitalnow-d2f1b.firebaseapp.com',
	databaseURL: 'https://hospitalnow-d2f1b.firebaseio.com',
	projectId: 'hospitalnow-d2f1b',
	storageBucket: 'hospitalnow-d2f1b.appspot.com',
	messagingSenderId: '492970423389',
	appId: '1:492970423389:web:c3c537680da917bf8c09b4',
	measurementId: 'G-NPV141BT74',
	type: 'service_account',
	private_key_id: '7c4f7340f33d2e563ff8fbc1f00b3495f5a52dd2',
	private_key:
		'-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDbq8I21BZ3D0pr\nQz5JmDejVU047fDxiOmEcVgdY7gfA1aYR8RKeVlqSNwGb6UhcmSY9Ym19hYKMF2s\ne8XaEbvovEb9tU79BR2tzSfxOQUn5QDbcitZmtinx80EiGJdlLNGbFEt0DmYYNyH\n+LXnVeJ2US+3aXMiPX4ykusXVFbcCp29sG1JASjaGyDKQ0Q3+zlXYXLAif2WrSwk\nlfM5h5kw4AoIFAIG08z9vKpSmVTaU9XmidTD1RAZKgyp5d02TzP0TJyD3mMO62p6\nIu/2n2TpW664J9PDL+T2Idd82cHSlMF6zVYR7qgYl5UgN7FToSARKGS8qG8b7HTL\nVBCOmfH5AgMBAAECggEACrFfCjBzef7tbFB5AhfV4H5c3JAvhfBYTp0+UOrrWd4d\nm1rF9iqXRMZQaINLflftR+lO12PH0Z3mV2isejeaBiOREJVAZ65VsiG+B57TDoy2\nCJiTfeB82pjuFMIHSL8d5WgNIQ3lWdKgNYGwqBa9B+2ehR7tzu0/nPpcFXYCZuJJ\nwiXeiNKdUZO++hgAwdboMuug82lCJFozF5FZP3op0AXIkBinokDE4WI5TNSFyzEK\nYU/X9vRFEnYwiH6CmRyFAzzz/Bw65PRk5uQXwO2gmvtYbaiF0v/8JcXa45BSe3l0\nvIpsNaHNIebuR1s1CrQ1aKs7qdi6N7VJGQRBSW534QKBgQD/Zk0w/2VdlDvEC8Io\nu7FIiH6zWogkQkRWhhei21SpttbyxYiw+Irt5bpzFXYpCk9NFMOouj+uKRiQOkWw\ng19lgoPi0y8mP67rt3wDd/hsAizhv3zv9hjAVNCHxD5hbAgZiWNzactQdnR4R9j5\nD3ezmyP/1YPWnOPRoPZ9doA5oQKBgQDcL/SrcfihE9AXQKXFvlbq6exHAPVqlD/K\n0Ht//7bo12LKc9lUNoGtE8RpDFdKxV48S4q/G4KVG25iFwyC9JcFw7rN97oAGO4+\nwpJ9Os1of6rUonxJlVqKDXDqfsgXQtquD+o90E+obSia69nrCkDJaFqIi+j/I1xP\npMFHKjdJWQKBgBFtcab+RnR0QP/HraAJ7rb8WWjzrIaM3wzoaYR7YvORvmkigYlR\n7Gj/XBGuTTnPskmYOSGyU9YWh86Pq2G4FTJgDY/UyUra3ZzIEHZMIW99VoKxBl15\ndYbqQrCA+6C6NnNHpLmjZnQ/IQN0I6IbJBflZjd24mAqpIERcsBs7aMBAoGAC7jd\n3La/lsu4O1Ssvp9If08ezhTl+9uSndiFiqXxdenpj3+lZU9VjgJMZY9LomZpguo+\no7fyNr/0G3LArsQYuizWaBq1I0YwgNTY+aPExbhuPs27sisqW8klZsaDHoHnpHai\ncNIDO6M8EytVOacdFdvhXf2c1OBsDK1nwMMlmFkCgYEArj80grqEIXZMYj3tcXgE\n5ezDyry7FSwVMMPjcZHaeSLJN+fYWa+BSNPlm7XzdoPnwc3TQNThClfimDkWinuR\nbgW2zPx+nKJ7CaS7nsW54DkLjwE6fE3WsZY5K57CMcm9JfSa/LTmy4s7jOqqvASK\nL7txwXB1spm8aCTTKfh0fQ4=\n-----END PRIVATE KEY-----\n',
	client_email:
		'firebase-adminsdk-dlzd1@hospitalnow-d2f1b.iam.gserviceaccount.com',
	client_id: '109162492689314220230',
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url:
		'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dlzd1%40hospitalnow-d2f1b.iam.gserviceaccount.com',
};

admin.initializeApp({
	credential: admin.credential.cert(firebaseConfiguration),
	databaseURL: 'https://hospitalnow-d2f1b.firebaseio.com',
});

firebase.initializeApp(firebaseConfiguration);

const db = admin.firestore();

export { firebase, admin, db, functions };
