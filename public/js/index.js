let firestore = firebase.firestore();

const outputHeader = document.querySelector('#hotDogOutput');
const inputTextField = document.querySelector('#latestHotDogStatus');
const saveButton = document.querySelector('#saveButton');

const docRef = firestore.doc('samples/sandwichData');

saveButton.addEventListener('click', function() {
  const textToSave = inputTextField.value;
  console.log(`I'm going to save ${textToSave} to Firestore`);
  docRef.set({
    hotDogStatus: textToSave
  }).then(()=> {
    console.log("Status saved!");
  }).catch(error => {
    console.log("Got an error: ", error);
  });
});