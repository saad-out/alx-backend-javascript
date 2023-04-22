import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((response) => {
      const responseArr = [];
      response.forEach((data) => {
        responseArr.push({
          status: 'success',
          value: data,
        });
      });
      return responseArr;
    })
    .catch((error) => [{
      status: 'rejected',
      value: error,
    }]);
}
