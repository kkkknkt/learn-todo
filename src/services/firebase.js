import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
export const Timestamp = firebase.firestore.Timestamp;

const firebaseConfig = {
	apiKey: 'AIzaSyCcmE78dq3dxovwQoU_O2JgBnzSbVT-Ycw',
	authDomain: 'kent-test-todos.firebaseapp.com',
	databaseURL: 'https://kent-test-todos-default-rtdb.firebaseio.com',
	projectId: 'kent-test-todos',
	storageBucket: 'kent-test-todos.appspot.com',
	messagingSenderId: '446432159355',
	appId: '1:446432159355:web:fc213ccb7a319ea08fa4de',
};

export default firebase.initializeApp(firebaseConfig);
