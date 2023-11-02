 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
 import { getFirestore, collection, getDocs, orderBy, query} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
 //getFirestore ดึงข้อมูลจาก firestore 
 //collection , getDocs ดึงค่า collection และ doc

 const firebaseConfig = {
   apiKey: "AIzaSyD9px4OKbC8456rxAluACYDxB04gPSSZfU",
   authDomain: "web-app-3e2ed.firebaseapp.com",
   projectId: "web-app-3e2ed",
   storageBucket: "web-app-3e2ed.appspot.com",
   messagingSenderId: "110173326817",
   appId: "1:110173326817:web:ad96cbf08c989fdb4916a0",
   measurementId: "G-FYPM13QYZ0"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 async function getStudent(db){
    const stdCol = collection(db,'student')
    const q = query(stdCol, orderBy('std_class'), orderBy('std_id'));
    const stdAll = await getDocs(q);
    return stdAll
 }

 function showData(student){
    const table = document.getElementById('table')
    const row = table.insertRow(-1)
    const stdIdCol = row.insertCell(0)
    const stdNameCol = row.insertCell(1)
    const stdSurnameCol = row.insertCell(2)
    const stdDateCol = row.insertCell(3)
    stdIdCol.innerHTML = student.data().std_id
    stdNameCol.innerHTML = student.data().std_name
    stdSurnameCol.innerHTML = student.data().std_surname
    stdDateCol.innerHTML = student.data().std_class
    
 }

 //ดึงกลุ่มข้อมูลจาก collection student
 const data = await getStudent(db)
 data.forEach(student => {
    showData(student)
 });