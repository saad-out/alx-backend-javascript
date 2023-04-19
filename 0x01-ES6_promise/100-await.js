import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  return Promise.all([photo, user]).then((values) => ({
    photo: values[0],
    user: values[1],
  }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}
